import { NextResponse } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl.clone()
    const host = request.headers.get('host')
    const protocol = request.headers.get('x-forwarded-proto') || 'http'

    // 1. Force HTTPS
    // 2. Force Non-WWW (poojapandits.com instead of www.poojapandits.com)
    if (host.startsWith('www.') || protocol === 'http') {
        // Don't redirect if it's localhost or an IP for development/internal testing
        if (host.includes('localhost') || host.match(/^\d+\.\d+\.\d+\.\d+/)) {
            return NextResponse.next()
        }

        const newHost = host.replace('www.', '')
        // Force https and clean host
        return NextResponse.redirect(`https://${newHost}${url.pathname}${url.search}`, 301)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - sitemap.xml
         * - robots.txt
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
