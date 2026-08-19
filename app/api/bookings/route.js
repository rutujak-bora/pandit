import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://sandesh9580:sandesh54321@pandit.zjt9iqc.mongodb.net/'
const DB_NAME = process.env.DB_NAME || 'pandit_booking'

let cachedClient = null

async function getMongoClient() {
  if (cachedClient) return cachedClient
  if (!MONGO_URL) return null
  try {
    const client = await MongoClient.connect(MONGO_URL, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000
    })
    cachedClient = client
    return client
  } catch (err) {
    return null
  }
}

export async function GET() {
  try {
    const client = await getMongoClient()
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
  } catch (err) {
    console.warn('Get bookings DB error:', err.message)
  }

  return NextResponse.json({
    success: true,
    count: 0,
    bookings: []
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
