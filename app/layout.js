import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pandit Ji Near Me - Best Pandit for Puja in Delhi NCR | Wedding, Griha Pravesh, Satyanarayan',
  description: 'Looking for the best Pandit ji near me? Book experienced Pandit Sandesh Tiwari for authentic Vedic ceremonies in Delhi NCR. Specializing in Wedding, Griha Pravesh, Satyanarayan Puja, and all Hindu rituals. Serving Delhi, Gurgaon, Noida, and Faridabad. Call +91 95807 58639',
  keywords: 'pandit ji near me, best pandit in delhi, puja pandit, pandit booking delhi, online pandit booking, wedding pandit, griha pravesh puja, navratri puja, pandit ji delhi, vedic ceremonies, puja services delhi, pandit in gurgaon, pandit in noida, marriage pandit, housewarming puja, ganesh puja pandit, satyanarayan puja pandit, north indian pandit, vedic puja services',
  authors: [{ name: 'Pandit Ji Services' }],
  openGraph: {
    title: 'Pandit Ji Near Me - Expert Hindu Priest for All Ceremonies in Delhi NCR',
    description: 'Book the best Pandit for wedding, griha pravesh, navratri and all Hindu pujas in Delhi NCR. Authentic Vedic rituals at your home.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pandit Ji Services'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pandit Ji Near Me - Professional Puja Services Delhi NCR',
    description: 'Book experienced Pandit for authentic Hindu ceremonies. 15+ years experience. Serving Delhi, Noida, Gurgaon.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: '9cZu1LK2XY02GwgxDs_Urrjtd9iR0EgKSrMPkTtwPHU'
  },
  alternates: {
    canonical: 'https://poojapandits.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="google-site-verification" content="9cZu1LK2XY02GwgxDs_Urrjtd9iR0EgKSrMPkTtwPHU" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🕉️</text></svg>" />

        {/* Schema.org markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Pandit Ji Services',
              description: 'Professional Hindu priest services for all Vedic ceremonies and pujas',
              image: 'https://images.unsplash.com/photo-1703045199207-5312874d9e54',
              '@id': 'https://poojapandits.com',
              url: 'https://poojapandits.com',
              telephone: '+919580758639',
              email: 'contact@panditjiservices.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Delhi',
                addressRegion: 'Delhi NCR',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 28.6139,
                longitude: 77.2090
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday'
                ],
                opens: '06:00',
                closes: '21:00'
              },
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '500'
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Delhi'
                },
                {
                  '@type': 'City',
                  name: 'Gurgaon'
                },
                {
                  '@type': 'City',
                  name: 'Noida'
                },
                {
                  '@type': 'City',
                  name: 'Faridabad'
                },
                {
                  '@type': 'City',
                  name: 'Ghaziabad'
                }
              ],
              serviceType: [
                'Wedding Ceremony',
                'Griha Pravesh',
                'Navratri Puja',
                'Ganesh Puja',
                'Naamkaran Sanskar',
                'Satyanarayan Katha',
                'Vastu Shanti',
                'Hindu Rituals'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}