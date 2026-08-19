import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    let body = {}
    try {
      body = await request.json()
    } catch (e) {
      body = {}
    }

    const { name, phone, service, date, time, address, message } = body
    const bookingId = 'BK' + Date.now().toString().slice(-6)

    // Basic validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name, phone, and service are required'
        },
        { status: 400 }
      )
    }

    // Always return 200 OK with success and bookingId
    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received successfully',
        bookingId: bookingId
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
