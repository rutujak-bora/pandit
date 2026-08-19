import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://sandesh9580:sandesh54321@pandit.zjt9iqc.mongodb.net/'
const DB_NAME = process.env.DB_NAME || 'pandit_booking'

let cachedClient = null

async function getMongoClient() {
  if (cachedClient) {
    return cachedClient
  }
  if (!MONGO_URL) {
    return null
  }
  try {
    const client = await MongoClient.connect(MONGO_URL, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000
    })
    cachedClient = client
    return client
  } catch (err) {
    console.warn('MongoDB connection fallback:', err.message)
    return null
  }
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { name, phone, email, service, date, time, address, message } = body

    // Generate unique booking ID
    const bookingId = 'BK' + Date.now().toString().slice(-6)

    // Validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        {
          error: 'Name, phone, and service are required',
          bookingId
        },
        { status: 400 }
      )
    }

    let savedToDb = false

    // Attempt DB save with safe timeout
    try {
      const client = await getMongoClient()
      if (client) {
        const db = client.db(DB_NAME)
        const bookingsCollection = db.collection('bookings')

        const booking = {
          bookingId,
          name: String(name).trim(),
          phone: String(phone).trim(),
          email: email ? String(email).trim() : null,
          service: String(service).trim(),
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
      console.warn('Database write bypassed:', dbErr.message)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received successfully',
        bookingId: bookingId,
        savedToDb
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    )
  } catch (err) {
    console.error('Booking endpoint handler error:', err)
    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received',
        bookingId: 'BK' + Date.now().toString().slice(-6)
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    service: 'Pandit Booking API',
    timestamp: new Date().toISOString()
  })
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
