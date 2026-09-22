import { servicesData } from '@/lib/data'
import ServiceDetailClient from './ServiceDetailClient'

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug]

  if (!service) {
    return {
      title: 'Service Not Found - Pandit Ji Services',
      description: 'The requested puja service could not be found.'
    }
  }

  const baseUrl = 'https://www.poojapandits.com'
  const imageUrl = service.heroImage.startsWith('http') ? service.heroImage : `${baseUrl}${service.heroImage}`
  const descText = service.significance.content.substring(0, 160) + '...'

  return {
    title: service.title,
    description: descText,
    keywords: service.slug === 'navratri-puja'
      ? 'Navratri Puja 2026, Kalash Sthapana Muhurat 2026, Ghatasthapana Vidhi, Durga Saptashati Path, Chandi Path, Kanya Puja, Navadurga, Pandit for Navratri, Navratri Pandit Lucknow, Navratri Pandit Delhi, Sharad Navratri 2026'
      : service.slug === 'pitru-paksha-shraddh'
      ? 'Pitru Paksha 2026, Shraddh 2026, Tarpan Vidhi, Pind Daan, Pitru Puja, Pitru Dosha Nivaran, Ancestral Rites, Pandit for Shraddh, Pitru Paksha Pandit Lucknow, Pitru Paksha 2026 dates, Mahalaya Amavasya 2026'
      : undefined,
    openGraph: {
      title: service.title,
      description: descText,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: service.title,
        }
      ],
      type: 'article',
      url: `${baseUrl}/services/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: descText,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/services/${params.slug}`
    }
  }
}

export default function Page({ params }) {
  const service = servicesData[params.slug]
  const baseUrl = 'https://www.poojapandits.com'

  // Build JSON-LD schema
  const schemas = []

  // BreadcrumbList schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': baseUrl },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${baseUrl}/#services` },
      { '@type': 'ListItem', 'position': 3, 'name': service?.title, 'item': `${baseUrl}/services/${params.slug}` }
    ]
  })

  // Service schema
  if (service) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.title,
      'description': service.significance.content,
      'url': `${baseUrl}/services/${params.slug}`,
      'image': service.heroImage.startsWith('http') ? service.heroImage : `${baseUrl}${service.heroImage}`,
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Pandit Ji Services — Pandit Sandesh Tiwari',
        'url': baseUrl,
        'telephone': '+919580758639',
        'image': `${baseUrl}/services/wedding-puja.jpeg`,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lucknow',
          'addressRegion': 'Uttar Pradesh',
          'addressCountry': 'IN'
        }
      },
      'areaServed': ['Lucknow', 'Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad'],
      'serviceType': 'Vedic Puja & Ritual'
    })

    // FAQPage schema (for AI Mode / Google SGE / People Also Ask)
    if (service.faqs && service.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': service.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      })
    }

    // HowTo schema (procedure steps)
    if (service.procedure && service.procedure.steps && service.procedure.steps.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': service.procedure.title,
        'description': `Complete procedure for ${service.title} by Pandit Sandesh Tiwari`,
        'totalTime': service.procedure.duration,
        'step': service.procedure.steps.map((step, i) => ({
          '@type': 'HowToStep',
          'position': i + 1,
          'name': step.name,
          'text': step.description
        }))
      })
    }
  }

  return (
    <>
      {/* Inject JSON-LD structured data for SEO and AI Mode */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServiceDetailClient service={service} />
    </>
  )
}