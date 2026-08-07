import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.poojapandits.com'),
  title: 'Top Pandit Ji in Lucknow & Delhi NCR – Sandesh Tiwari',
  description: 'Book the best Pandit Ji near me for Wedding, Griha Pravesh, and Vedic Pujas in Lucknow and Delhi NCR. Honored with Ved Vibhushan Award. Authentic rituals.',
  keywords: 'pandit ji near me, Pandit Ji in Lucknow, Best Pandit in Lucknow, Top Pandit Ji in Delhi NCR, Puja Services Lucknow, Wedding Pandit Lucknow, North Indian Pandit, Vedic Puja Services, Pandit for Griha Pravesh, Pandit for Wedding, pooja name',
  authors: [{ name: 'Pandit Sandesh Tiwari' }],
  openGraph: {
    title: 'Top Pandit Ji in Lucknow & Delhi NCR – Sandesh Tiwari',
    description: 'Book the best Pandit Ji near me for Wedding, Griha Pravesh, and Vedic Pujas. Expert Vedic ceremonies in Lucknow and Delhi region.',
    type: 'website',
    url: 'https://www.poojapandits.com',
    locale: 'en_IN',
    siteName: 'Pandit Ji Services',
    images: [
      {
        url: 'https://www.poojapandits.com/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Pandit Sandesh Tiwari - Best Pandit Ji in Lucknow & Delhi NCR',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Pandit Ji in Lucknow & Delhi NCR – Sandesh Tiwari',
    description: 'Book the best Pandit Ji near me for Wedding, Griha Pravesh. Authentic Hindu ceremonies.',
    images: ['https://www.poojapandits.com/og-preview.jpg'],
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
    google: '9cZu1LK2XY02GwgxDs_Urrjtd9iR0EgKSrMPkTtwPHU',
    other: {
      'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE'
    }
  },
  alternates: {
    canonical: 'https://www.poojapandits.com'
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
              name: 'Pandit Sandesh Tiwari - Best Pandit Ji near me',
              description: 'Professional Hindu priest services for all Vedic ceremonies and pujas in Lucknow and Delhi NCR.',
              image: 'https://poojapandits.com/og-preview.jpg',
              '@id': 'https://poojapandits.com',
              url: 'https://poojapandits.com',
              telephone: '+919580758639',
              email: 'contact@panditjiservices.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'b3/198 Vishwash Khand, Gomti Nagar',
                addressLocality: 'Lucknow',
                postalCode: '226010',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.8467,
                longitude: 80.9462
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
              areaServed: ['Lucknow', 'Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad'],
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