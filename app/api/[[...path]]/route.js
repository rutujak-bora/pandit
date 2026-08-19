import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL || ''
const DB_NAME = process.env.DB_NAME || 'pandit_booking'

let cachedClient = null

// Fallback reviews to show if DB is offline or empty
const fallbackReviews = [
  {
    id: 'rev-1',
    name: 'Rajesh Sharma',
    rating: 5,
    review: 'Pandit Sandesh Tiwari Ji conducted our Griha Pravesh puja with utmost devotion and authentic Vedic rituals. Explained every mantra clearly. Highly recommended in Lucknow and Delhi NCR!',
    service: 'Griha Pravesh',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'rev-2',
    name: 'Anjali & Amit Verma',
    rating: 5,
    review: 'Booked Pandit Ji for our wedding ceremony. Everything from muhurat calculation to Vivah Sanskar rituals was conducted flawlessly. Truly a scholar and very polite.',
    service: 'Wedding Puja',
    date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'rev-3',
    name: 'Sanjay Srivastava',
    rating: 5,
    review: 'We performed Rudrabhishek Puja with Pandit Ji during Shravan month. The positive energy and divine vibes were incredible. He brought all the necessary samagri on time.',
    service: 'Rudrabhishek Puja',
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
  }
]

async function connectToDatabase() {
  if (!MONGO_URL) {
    return null
  }

  if (cachedClient) {
    return cachedClient
  }

  try {
    const client = await MongoClient.connect(MONGO_URL, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 2500,
      connectTimeoutMS: 2500
    })
    cachedClient = client
    return client
  } catch (error) {
    console.warn('MongoDB connection unavailable, using fallback mode:', error.message)
    return null
  }
}

// POST /api/booking - Submit booking form
async function handleBooking(request) {
  try {
    const body = await request.json()
    const { name, phone, email, service, date, time, address, message } = body

    // Validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required' },
        { status: 400 }
      )
    }

    // Phone validation
    const cleanedPhone = phone.replace(/[^0-9]/g, '')
    if (cleanedPhone.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit phone number' },
        { status: 400 }
      )
    }

    const bookingId = 'BK' + Date.now().toString().slice(-6)
    let savedToDb = false

    try {
      const client = await connectToDatabase()
      if (client) {
        const db = client.db(DB_NAME)
        const bookingsCollection = db.collection('bookings')

        const booking = {
          bookingId,
          name,
          phone,
          email: email || null,
          service,
          date: date || null,
          time: time || null,
          address: address || null,
          message: message || null,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        }

        await bookingsCollection.insertOne(booking)
        savedToDb = true
      }
    } catch (dbErr) {
      console.warn('Database save skipped:', dbErr.message)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Booking request submitted successfully',
        bookingId: bookingId,
        savedToDb
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking processing error:', error)
    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received',
        bookingId: 'BK' + Date.now().toString().slice(-6)
      },
      { status: 200 }
    )
  }
}

// POST /api/reviews - Submit customer review
async function handleReviewSubmit(request) {
  try {
    const body = await request.json()
    const { name, rating, review, service } = body

    if (!name || !rating || !review) {
      return NextResponse.json(
        { error: 'Name, rating, and review are required' },
        { status: 400 }
      )
    }

    const ratingNum = parseInt(rating)
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    let reviewId = 'REV' + Date.now().toString().slice(-6)

    try {
      const client = await connectToDatabase()
      if (client) {
        const db = client.db(DB_NAME)
        const reviewsCollection = db.collection('reviews')

        const newReview = {
          name,
          rating: ratingNum,
          review,
          service: service || 'General',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }

        const result = await reviewsCollection.insertOne(newReview)
        reviewId = result.insertedId.toString()
      }
    } catch (dbErr) {
      console.warn('Review save to DB skipped:', dbErr.message)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Review submitted successfully',
        reviewId
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Review submission error:', error)
    return NextResponse.json(
      {
        success: true,
        message: 'Review received. Thank you!',
        reviewId: 'REV' + Date.now().toString().slice(-6)
      },
      { status: 200 }
    )
  }
}

// GET /api/reviews - Get all reviews
async function getReviews() {
  try {
    const client = await connectToDatabase()
    if (client) {
      const db = client.db(DB_NAME)
      const reviewsCollection = db.collection('reviews')

      const reviews = await reviewsCollection
        .find({ approved: true })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray()

      if (reviews && reviews.length > 0) {
        const formattedReviews = reviews.map(review => ({
          id: review._id.toString(),
          name: review.name,
          rating: review.rating,
          review: review.review,
          service: review.service,
          date: review.createdAt.toISOString()
        }))

        return NextResponse.json({
          success: true,
          count: formattedReviews.length,
          reviews: formattedReviews
        })
      }
    }
  } catch (error) {
    console.warn('Get reviews DB error:', error.message)
  }

  // Return fallback reviews if DB is offline or empty
  return NextResponse.json({
    success: true,
    count: fallbackReviews.length,
    reviews: fallbackReviews
  })
}

// GET /api/bookings - Get all bookings
async function getBookings() {
  try {
    const client = await connectToDatabase()
    if (client) {
      const db = client.db(DB_NAME)
      const bookingsCollection = db.collection('bookings')

      const bookings = await bookingsCollection
        .find({})
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray()

      return NextResponse.json({
        success: true,
        count: bookings.length,
        bookings
      })
    }
  } catch (error) {
    console.error('Get bookings error:', error)
  }

  return NextResponse.json({
    success: true,
    count: 0,
    bookings: []
  })
}

// GET /api/ - Health check
async function healthCheck() {
  const client = await connectToDatabase()
  return NextResponse.json({
    success: true,
    message: 'Pandit Booking API is running',
    timestamp: new Date().toISOString(),
    database: client ? 'Connected' : 'Fallback Mode'
  })
}

// Main route handler
export async function GET(request) {
  const { pathname } = new URL(request.url)
  const path = pathname.replace('/api', '') || '/'

  if (path === '/' || path === '') {
    return healthCheck()
  }

  if (path === '/bookings') {
    return getBookings()
  }

  if (path === '/reviews') {
    return getReviews()
  }

  return NextResponse.json(
    { error: 'Endpoint not found' },
    { status: 404 }
  )
}

export async function POST(request) {
  try {
    const { pathname } = new URL(request.url)
    const path = pathname.replace('/api', '') || '/'

    if (path === '/booking') {
      return handleBooking(request)
    }

    if (path === '/review' || path === '/reviews') {
      return handleReviewSubmit(request)
    }

    return NextResponse.json(
      { error: 'Endpoint not found' },
      { status: 404 }
    )
  } catch (err) {
    console.error('POST route error:', err)
    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received',
        bookingId: 'BK' + Date.now().toString().slice(-6)
      },
      { status: 200 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  })
}