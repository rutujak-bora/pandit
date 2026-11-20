import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.poojapandits.com'),
  title: 'Best Pandit Ji in Lucknow & Delhi NCR | Vedic Puja, Wedding & Griha Pravesh',
  description: 'Book verified Vedic Pandit Ji near me in Lucknow, Delhi, Noida & Gurgaon for Griha Pravesh, Vivah Sanskar, Rudrabhishek & Hawan. 15+ Yrs Exp, Ved Vibhushan Awardee.',
  keywords: 'pandit ji near me, best pandit in lucknow, pandit in lucknow gomti nagar, pandit ji in delhi, pandit in noida, pandit in gurgaon, pandit for griha pravesh, pandit for wedding ceremony, vedic pandit ji, satyanarayan katha pandit, rudrabhishek puja pandit, hawan pandit near me, online pandit booking, puja samagri, navratri puja pandit',
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
        url: 'https://www.poojapandits.com/og-preview.jpg?v=3',
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
    images: ['https://www.poojapandits.com/og-preview.jpg?v=3'],
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
  other: {
    'google-adsense-account': 'ca-pub-3647778216339427'
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
      <head>
        <meta name="google-adsense-account" content="ca-pub-3647778216339427" />
        <meta property="og:image" content="https://www.poojapandits.com/og-preview.jpg?v=3" />
        <meta property="og:image:secure_url" content="https://www.poojapandits.com/og-preview.jpg?v=3" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta itemProp="image" content="https://www.poojapandits.com/og-preview.jpg?v=3" />
        <link rel="image_src" href="https://www.poojapandits.com/og-preview.jpg?v=3" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3647778216339427"
          crossorigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* Schema.org markup for Local Business & FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'Pandit Sandesh Tiwari - Best Vedic Pandit Ji',
                alternateName: ['Pandit Ji Services', 'Pooja Pandits', 'Vedic Priest Lucknow Delhi'],
                description: 'Highly learned Saryuparin Brahman associated with Ayodhya Math. Ved Vibhushan awardee offering authentic Hindu pujas, Griha Pravesh, Vivah, Rudrabhishek and Hawan at home in Lucknow, Delhi, Noida & Gurgaon.',
                image: 'https://www.poojapandits.com/og-preview.jpg?v=3',
                '@id': 'https://www.poojapandits.com/#organization',
                url: 'https://www.poojapandits.com',
                telephone: '+919580758639',
                email: 'contact@panditjiservices.com',
                address: [
                  {
                    '@type': 'PostalAddress',
                    streetAddress: 'Vishvas Khand 4, Near Dukh Harni Shailani Mata Mandir, Jugauli Crossing, Gomti Nagar',
                    addressLocality: 'Lucknow',
                    postalCode: '226010',
                    addressRegion: 'Uttar Pradesh',
                    addressCountry: 'IN'
                  },
                  {
                    '@type': 'PostalAddress',
                    streetAddress: 'b3/198 Vishwash Khand, Gomti Nagar',
                    addressLocality: 'Lucknow',
                    postalCode: '226010',
                    addressRegion: 'Uttar Pradesh',
                    addressCountry: 'IN'
                  },
                  {
                    '@type': 'PostalAddress',
                    streetAddress: 'Katwaria Sarai',
                    addressLocality: 'New Delhi',
                    postalCode: '110016',
                    addressRegion: 'Delhi',
                    addressCountry: 'IN'
                  }
                ],
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
                priceRange: '₹₹',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '500',
                  bestRating: '5',
                  worstRating: '1'
                },
                areaServed: [
                  { '@type': 'City', name: 'Lucknow' },
                  { '@type': 'City', name: 'Delhi' },
                  { '@type': 'City', name: 'Noida' },
                  { '@type': 'City', name: 'Gurgaon' },
                  { '@type': 'City', name: 'Faridabad' },
                  { '@type': 'City', name: 'Ghaziabad' }
                ],
                serviceType: [
                  'Wedding Puja Vivah Sanskar',
                  'Griha Pravesh Puja',
                  'Rudrabhishek Puja',
                  'Satyanarayan Katha Hawan',
                  'Navratri Puja Kalash Sthapana',
                  'Office Opening Business Puja',
                  'Vastu Shanti Puja',
                  'Maha Mrityunjaya Jaap Anushthan',
                  'Naamkaran Sanskar',
                  'Sunderkand Path'
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Vedic Puja Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Vedic Puja Vidhi Only',
                        description: 'Vedic ritual guidance and mantra chanting by Ayodhya Math Pandit Ji'
                      },
                      price: '1500',
                      priceCurrency: 'INR'
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Complete Puja with 100% Samagri Included',
                        description: 'Vedic priest with all sacred Hawan and Puja materials brought to your doorstep'
                      },
                      price: '3500',
                      priceCurrency: 'INR'
                    }
                  ]
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How can I book a Pandit Ji near me in Lucknow or Delhi NCR?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'You can book verified Vedic Pandit Sandesh Tiwari directly by calling or sending a WhatsApp message to +91 95807 58639. Same-day bookings and free Shubh Muhurat consultation are provided.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Pandit Ji bring all Hawan and Puja Samagri?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes! We offer a Complete Package where 100% pure desi ghee, sacred mango hawan wood, navgrah samagri, dry fruits, and puja essentials are provided by Pandit Ji.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What types of pujas do you perform at home?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We perform all Vedic rituals including Wedding (Vivah Sanskar), Griha Pravesh, Satyanarayan Katha, Rudrabhishek, Navratri Durga Saptashati Path, Office Opening, Vastu Shanti, Naamkaran, and Sunderkand Path.'
                    }
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  )
}