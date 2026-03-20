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

  const baseUrl = 'https://poojapandits.com'
  const imageUrl = service.heroImage.startsWith('http') ? service.heroImage : `${baseUrl}${service.heroImage}`

  return {
    title: service.title,
    description: service.significance.content.substring(0, 160) + '...',
    openGraph: {
      title: service.title,
      description: service.significance.content.substring(0, 160) + '...',
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
      description: service.significance.content.substring(0, 160) + '...',
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/services/${params.slug}`
    }
  }
}

export default function Page({ params }) {
  const service = servicesData[params.slug]
  return <ServiceDetailClient service={service} />
}