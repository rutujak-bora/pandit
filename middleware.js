import { NextResponse } from 'next/server'

export function middleware(request) {
    // www redirect is handled by Vercel domain settings
    // No app-level redirect needed to avoid redirect loops
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
