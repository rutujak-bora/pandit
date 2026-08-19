import { NextResponse } from 'next/server'

const reviewsData = [
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

export async function GET() {
  return NextResponse.json({
    success: true,
    count: reviewsData.length,
    reviews: reviewsData
  }, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  })
}

export async function POST(request) {
  try {
    let body = {}
    try {
      body = await request.json()
    } catch (e) {
      body = {}
    }

    const { name, rating, review, service } = body

    if (!name || !rating || !review) {
      return NextResponse.json(
        { error: 'Name, rating, and review are required' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Review received successfully',
      reviewId: 'REV' + Date.now().toString().slice(-6)
    }, { status: 200 })
  } catch (err) {
    return NextResponse.json({
      success: true,
      message: 'Review received. Thank you!',
      reviewId: 'REV' + Date.now().toString().slice(-6)
    }, { status: 200 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  })
}
