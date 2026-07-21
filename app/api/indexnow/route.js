import { NextResponse } from 'next/server'

// IndexNow Key - also needs to be available at /[key].txt
const INDEXNOW_KEY = 'a1b2c3d4e5f6789012345678poojapandits'

export async function GET() {
  return NextResponse.json({ key: INDEXNOW_KEY })
}

export async function POST(request) {
  try {
    const body = await request.json()
    const urls = body.urls || []

    if (urls.length === 0) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 })
    }

    // Submit to IndexNow (Bing + Yandex)
    const indexNowPayload = {
      host: 'www.poojapandits.com',
      key: INDEXNOW_KEY,
      keyLocation: `https://www.poojapandits.com/${INDEXNOW_KEY}.txt`,
      urlList: urls
    }

    const [bingResponse] = await Promise.allSettled([
      fetch('https://www.bing.com/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(indexNowPayload)
      })
    ])

    return NextResponse.json({
      success: true,
      message: 'URLs submitted to IndexNow',
      urls,
      results: {
        bing: bingResponse.status === 'fulfilled' ? bingResponse.value.status : 'error'
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'IndexNow submission failed', details: error.message }, { status: 500 })
  }
}
