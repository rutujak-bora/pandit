import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://poojapandits.com'),
  title: 'Top Pandit Ji in Delhi NCR for Puja & Weddings – Sandesh Tiwari',
  description: 'Book the best Pandit Ji in Delhi NCR for Wedding, Griha Pravesh, and Vedic Pujas. Honored with Ved Vibhushan Award. Authentic rituals by Pandit Sandesh Tiwari.',
  keywords: 'Top Pandit Ji in Delhi NCR, Best Pandit in Delhi, Puja Services Noida, Wedding Pandit Gurgaon, North Indian Pandit Delhi, Vedic Puja Services Delhi NCR, Pandit for Griha Pravesh, Pandit for Wedding',
  authors: [{ name: 'Pandit Sandesh Tiwari' }],
  openGraph: {
    title: 'Top Pandit Ji in Delhi NCR for Puja & Weddings – Sandesh Tiwari',
    description: 'Book the best Pandit Ji in Delhi NCR for Wedding, Griha Pravesh, and Vedic Pujas. Expert Vedic ceremonies in Delhi region.',
    type: 'website',
    url: 'https://poojapandits.com',
    locale: 'en_IN',
    siteName: 'Pandit Ji Services',
    images: [
      {
        url: '/new-bg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pandit Sandesh Tiwari - Best Pandit Ji in Delhi NCR',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Pandit Ji in Delhi NCR for Puja & Weddings – Sandesh Tiwari',
    description: 'Book the best Pandit Ji in Delhi NCR for Wedding, Griha Pravesh. Authentic Hindu ceremonies.',
    images: ['/new-bg.jpeg'],
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
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🕉️</text></svg>',
  }
}

export const viewport = {
  themeColor: '#ea580c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Schema.org markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Pandit Sandesh Tiwari - Best Pandit Ji in Delhi NCR',
              description: 'Professional Hindu priest services for all Vedic ceremonies and pujas in Delhi NCR.',
              image: 'https://poojapandits.com/new-bg.jpeg',
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
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
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
              areaServed: ['Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad'],
              serviceType: [
                'Wedding Ceremony', 'Griha Pravesh', 'Navratri Puja', 'Ganesh Puja',
                'Naamkaran Sanskar', 'Satyanarayan Katha', 'Vastu Shanti', 'Hindu Rituals'
              ]
            })
          }}
        />
      </body>
    </html>
  )
}