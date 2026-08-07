import Link from 'next/link'
import { notFound } from 'next/navigation'

const locationData = {
  'pandit-in-lucknow': {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    phone: '+919580758639',
    heroTitle: 'Best Pandit Ji in Lucknow',
    heroSubtitle: 'Trusted Vedic Priest for All Pujas & Ceremonies in Lucknow',
    description: 'Looking for a reliable and experienced pandit ji near me in Lucknow? Pandit Sandesh Tiwari is a highly learned Saryuparin Brahman associated with the oldest math in Ayodhya. Based in Gomti Nagar, we perform all types of pujas, havan, and Vedic ceremonies at your doorstep in Lucknow.',
    areas: ['Gomti Nagar', 'Indira Nagar', 'Aliganj', 'Mahanagar', 'Hazratganj', 'Ashiyana', 'Vikas Nagar', 'Jankipuram', 'Chowk', 'Aashiana', 'Aminabad'],
    keywords: 'pandit ji near me, Pandit in Lucknow, Pandit Ji in Lucknow, Best Pandit Lucknow, Pandit for pooja name Lucknow, Vedic Pandit Lucknow, Pandit for Wedding Lucknow, Pandit in Gomti Nagar',
    faqs: [
      { q: 'Do you provide pandit services in all Lucknow areas?', a: 'Yes, we cover all areas of Lucknow including Gomti Nagar, Indira Nagar, Aliganj, Mahanagar, Hazratganj and more. We travel to your location.' },
      { q: 'How quickly can a pandit come to my home in Lucknow?', a: 'We offer same-day bookings in Lucknow. Call us and we confirm within 1 hour.' },
      { q: 'What pujas do you perform in Lucknow?', a: 'We perform all types of pujas - Wedding, Griha Pravesh, Rudrabhishek, Navratri, Ganesh Puja, Satyanarayan Katha, Naamkaran, Vastu Shanti, and more.' },
    ]
  },
  'pandit-in-noida': {
    city: 'Noida',
    state: 'Uttar Pradesh',
    phone: '+919580758639',
    heroTitle: 'Best Pandit Ji in Noida',
    heroSubtitle: 'Trusted Vedic Priest for All Pujas & Ceremonies in Noida',
    description: 'Looking for a reliable and experienced pandit ji in Noida? Pandit Sandesh Tiwari is a highly learned Saryuparin Brahman associated with the oldest math in Ayodhya, now serving all sectors of Noida for 15+ years. We perform all types of pujas, havan, and Vedic ceremonies at your doorstep in Noida.',
    areas: ['Sector 18', 'Sector 50', 'Sector 62', 'Sector 93', 'Sector 100', 'Sector 137', 'Sector 150', 'Greater Noida', 'Expressway', 'Indirapuram', 'Vasundhara', 'Vaishali', 'Crossings Republik', 'Noida Extension'],
    keywords: 'Pandit in Noida, Pandit Ji in Noida, Best Pandit Noida, Pandit for Puja in Noida, Vedic Pandit Noida, Pandit for Wedding Noida, Pandit in Noida Sector 50, Pandit in Noida Sector 62',
    faqs: [
      { q: 'Do you provide pandit services in all Noida sectors?', a: 'Yes, we cover all sectors of Noida including Sector 18, 50, 62, 93, 100, 137, 150 and Greater Noida. We travel to your location.' },
      { q: 'How quickly can a pandit come to my home in Noida?', a: 'We offer same-day bookings in Noida. Call us and we confirm within 1 hour.' },
      { q: 'What pujas do you perform in Noida?', a: 'We perform all types of pujas - Wedding, Griha Pravesh, Rudrabhishek, Navratri, Ganesh Puja, Satyanarayan Katha, Naamkaran, Vastu Shanti, and more.' },
    ]
  },
  'pandit-in-gurgaon': {
    city: 'Gurgaon',
    state: 'Haryana',
    phone: '+919580758639',
    heroTitle: 'Best Pandit Ji in Gurgaon',
    heroSubtitle: 'Trusted Vedic Priest for All Pujas & Ceremonies in Gurgaon',
    description: 'Searching for the best pandit ji in Gurgaon? Pandit Sandesh Tiwari brings 15+ years of experience performing authentic Vedic ceremonies across all areas of Gurgaon and Gurugram. We specialise in Wedding Puja, Griha Pravesh, Rudrabhishek, and all Hindu rituals at your home.',
    areas: ['DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'DLF Phase 5', 'Sohna Road', 'Golf Course Road', 'Sector 14', 'Sector 56', 'MG Road', 'Palam Vihar', 'Cyber City', 'South City', 'Nirvana Country'],
    keywords: 'Pandit in Gurgaon, Pandit Ji in Gurgaon, Best Pandit Gurgaon, Pandit for Puja Gurgaon, Vedic Pandit Gurgaon, Pandit for Wedding Gurgaon, Pandit in DLF Gurgaon, Pandit in Gurugram',
    faqs: [
      { q: 'Do you provide pandit services in DLF Gurgaon?', a: 'Yes, we cover DLF Phase 1 to 5, Sohna Road, Golf Course Road, MG Road and all other areas of Gurgaon.' },
      { q: 'Can you perform Griha Pravesh puja in Gurgaon?', a: 'Yes, Griha Pravesh is one of our most popular services in Gurgaon. We arrange all samagri and perform the complete ritual.' },
      { q: 'Are you available on weekends in Gurgaon?', a: 'Yes, we are available 7 days a week including weekends for all puja services in Gurgaon.' },
    ]
  },
  'pandit-in-delhi': {
    city: 'Delhi',
    state: 'Delhi',
    phone: '+919580758639',
    heroTitle: 'Best Pandit Ji in Delhi',
    heroSubtitle: 'Trusted Vedic Priest for All Pujas & Ceremonies in Delhi',
    description: 'Need a learned pandit ji in Delhi for your puja or ceremony? Pandit Sandesh Tiwari is a Saryuparin Brahman with Acharya degree from Sampurnanand Sanskrit Vishwavidyalay and M.A. in Sanskrit from Shri Lal Bahadur Shastri National Sanskrit University. Serving all areas of Delhi for over 15 years.',
    areas: ['Connaught Place', 'Dwarka', 'Rohini', 'Janakpuri', 'Vasant Kunj', 'Saket', 'Lajpat Nagar', 'Karol Bagh', 'Mayur Vihar', 'Preet Vihar', 'Pitampura', 'Paschim Vihar', 'Uttam Nagar', 'Tilak Nagar'],
    keywords: 'Pandit in Delhi, Pandit Ji in Delhi, Best Pandit Delhi, Pandit for Puja Delhi, Vedic Pandit Delhi, Pandit for Wedding Delhi, North Indian Pandit Delhi, Pandit in Dwarka Delhi',
    faqs: [
      { q: 'Which areas of Delhi do you cover?', a: 'We cover all areas of Delhi including Dwarka, Rohini, Janakpuri, Vasant Kunj, Saket, Lajpat Nagar, Karol Bagh, Mayur Vihar and more.' },
      { q: 'Do you offer muhurat consultation in Delhi?', a: 'Yes, we provide free muhurat consultation for all bookings in Delhi. Just call or WhatsApp us.' },
      { q: 'Can you arrange puja samagri in Delhi?', a: 'Yes, we arrange complete puja samagri on request. The cost is added to the service charges.' },
    ]
  },
  'pandit-in-faridabad': {
    city: 'Faridabad',
    state: 'Haryana',
    phone: '+919580758639',
    heroTitle: 'Best Pandit Ji in Faridabad',
    heroSubtitle: 'Trusted Vedic Priest for All Pujas & Ceremonies in Faridabad',
    description: 'Looking for an experienced pandit ji in Faridabad? Pandit Sandesh Tiwari performs authentic Vedic ceremonies across all sectors of Faridabad. With 15+ years of experience and honored with the prestigious Ved Vibhushan Award, we bring the highest quality of religious services to your home in Faridabad.',
    areas: ['Sector 15', 'Sector 21C', 'NIT Faridabad', 'Old Faridabad', 'Ballabhgarh', 'Green Field Colony', 'Neharpar', 'NHPC Colony', 'Greater Faridabad', 'Tigaon Road', 'Suraj Kund'],
    keywords: 'Pandit in Faridabad, Pandit Ji in Faridabad, Best Pandit Faridabad, Pandit for Puja Faridabad, Vedic Pandit Faridabad, Pandit for Wedding Faridabad, Pandit in NIT Faridabad',
    faqs: [
      { q: 'Do you cover all sectors of Faridabad?', a: 'Yes, we cover all areas of Faridabad including NIT, Sector 15, Ballabhgarh, Neharpar, Green Field Colony and more.' },
      { q: 'Can you perform wedding ceremony in Faridabad?', a: 'Yes, Wedding Puja (Vivah Sanskar) is one of our specialties. We perform complete Vedic wedding ceremony in Faridabad.' },
      { q: 'How to book pandit in Faridabad?', a: 'Simply call or WhatsApp us at +91 95807 58639 and we confirm your booking within 1 hour.' },
    ]
  },
  'pandit-in-ghaziabad': {
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    phone: '+919580758639',
    heroTitle: 'Best Pandit Ji in Ghaziabad',
    heroSubtitle: 'Trusted Vedic Priest for All Pujas & Ceremonies in Ghaziabad',
    description: 'Searching for a trusted pandit ji in Ghaziabad? Pandit Sandesh Tiwari is an expert Vedic priest serving Ghaziabad and surrounding areas. From Raj Nagar to Indirapuram, we perform all types of Hindu pujas and ceremonies with complete devotion and authentic Vedic rituals at your doorstep.',
    areas: ['Raj Nagar', 'Raj Nagar Extension', 'Kaushambi', 'Indirapuram', 'Vaishali', 'Siddharth Vihar', 'Crossing Republik', 'Mohan Nagar', 'Lal Kuan', 'Sahibabad', 'Tronica City'],
    keywords: 'Pandit in Ghaziabad, Pandit Ji in Ghaziabad, Best Pandit Ghaziabad, Pandit for Puja Ghaziabad, Vedic Pandit Ghaziabad, Pandit for Wedding Ghaziabad, Pandit in Indirapuram, Pandit in Vaishali',
    faqs: [
      { q: 'Do you provide pandit services in Indirapuram Ghaziabad?', a: 'Yes, we regularly serve Indirapuram, Vaishali, Kaushambi and all major areas of Ghaziabad.' },
      { q: 'Do you perform Rudrabhishek in Ghaziabad during Shravan?', a: 'Yes, Rudrabhishek during Shravan Maas is very popular. We perform this special puja at your home in Ghaziabad.' },
      { q: 'What is the booking process for Ghaziabad?', a: 'Call or WhatsApp +91 95807 58639. We confirm the booking and pandit ji visits your location on the agreed date.' },
    ]
  },
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const data = locationData[params.slug]
  if (!data) return { title: 'Not Found' }

  return {
    title: `${data.heroTitle} for Puja & Ceremonies – Pandit Sandesh Tiwari`,
    description: data.description.substring(0, 160),
    keywords: data.keywords,
    openGraph: {
      title: `${data.heroTitle} for Puja & Ceremonies`,
      description: data.description.substring(0, 160),
      url: `https://www.poojapandits.com/${params.slug}`,
      images: [{ url: 'https://www.poojapandits.com/new-bg.jpeg', width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://www.poojapandits.com/${params.slug}` },
  }
}

export default function LocationPage({ params }) {
  const data = locationData[params.slug]
  if (!data) return notFound()

  const waMsg = encodeURIComponent(`Namaste! I want to book a pandit ji in ${data.city}. Please share details.`)
  const waLink = `https://wa.me/919580758639?text=${waMsg}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Pandit Sandesh Tiwari - Best Pandit Ji in ${data.city}`,
    description: data.description,
    image: 'https://www.poojapandits.com/new-bg.jpeg',
    url: `https://www.poojapandits.com/${params.slug}`,
    telephone: data.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.city,
      addressRegion: data.state,
      addressCountry: 'IN',
    },
    areaServed: data.areas.map((area) => ({ '@type': 'Place', name: `${area}, ${data.city}` })),
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500' },
    priceRange: '$$',
    openingHours: 'Mo-Su 06:00-21:00',
    sameAs: ['https://www.poojapandits.com'],
  }

  const services = [
    { icon: '💑', name: 'Wedding Puja', desc: 'Complete Vedic vivah sanskar ceremony' },
    { icon: '🔱', name: 'Rudrabhishek Puja', desc: 'Shravan Mas special – Lord Shiva blessings' },
    { icon: '🏠', name: 'Griha Pravesh', desc: 'Housewarming & new home puja' },
    { icon: '🪔', name: 'Navratri Puja', desc: 'Nine-day Devi puja with kalash sthapana' },
    { icon: '🙏', name: 'Ganesh Puja', desc: 'Ganpati sthapana for auspicious beginnings' },
    { icon: '🕉️', name: 'Satyanarayan Katha', desc: 'Sacred katha for prosperity and peace' },
    { icon: '👶', name: 'Naamkaran Sanskar', desc: 'Traditional baby naming ceremony' },
    { icon: '🧭', name: 'Vastu Shanti', desc: 'Vastu correction and peace rituals' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-xl">🕉️</div>
              <div>
                <p className="font-bold text-orange-600 text-lg">Pandit Ji Services</p>
                <p className="text-xs text-gray-500">Delhi NCR</p>
              </div>
            </Link>
            <a href={`tel:${data.phone}`}>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
                📞 Call Now
              </button>
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-900 via-red-800 to-orange-700 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/30 border border-orange-300/30 rounded-full px-5 py-2 mb-6 text-sm font-semibold text-orange-200">
              🕉️ Serving {data.city}, {data.state} 🕉️
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {data.heroTitle}
            </h1>
            <p className="text-orange-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${data.phone}`} className="bg-white text-orange-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors shadow-xl">
                📞 Call: +91 95807 58639
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-700 transition-colors shadow-xl">
                💬 WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-orange-100">
              <div className="text-center"><div className="text-2xl font-bold">15+</div><div className="text-xs uppercase tracking-wide">Years Exp.</div></div>
              <div className="text-center"><div className="text-2xl font-bold">5000+</div><div className="text-xs uppercase tracking-wide">Pujas Done</div></div>
              <div className="text-center"><div className="text-2xl font-bold">4.9★</div><div className="text-xs uppercase tracking-wide">Rating</div></div>
              <div className="text-center"><div className="text-2xl font-bold">500+</div><div className="text-xs uppercase tracking-wide">Families</div></div>
            </div>
          </div>
        </section>

        {/* About in this city */}
        <section className="py-14 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pandit Ji Services in <span className="text-orange-600">{data.city}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{data.description}</p>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-bold text-orange-700 text-lg mb-3">✅ Areas Covered in {data.city}</h3>
              <div className="flex flex-wrap gap-2">
                {data.areas.map((area) => (
                  <span key={area} className="bg-white border border-orange-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-14 px-4 bg-orange-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Our Puja Services in <span className="text-orange-600">{data.city}</span>
            </h2>
            <p className="text-gray-500 text-center mb-10">All ceremonies performed at your home with complete samagri</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-orange-100 hover:shadow-md hover:border-orange-300 transition-all">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.name}</h3>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-14 px-4 bg-white">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Book Pandit Ji in <span className="text-orange-600">{data.city}</span> Now
            </h2>
            <p className="text-gray-500 mb-8">Same-day booking available. Confirmation within 1 hour.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${data.phone}`} className="bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-700 transition-colors shadow-lg">
                📞 Call: +91 95807 58639
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-700 transition-colors shadow-lg">
                💬 WhatsApp Now
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">Or <Link href="/#booking" className="text-orange-600 underline">fill the booking form</Link> on our main website</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-orange-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions – Pandit in {data.city}
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-orange-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Q: {faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
          <p className="mb-2">
            <Link href="/" className="text-orange-400 hover:underline">← Back to Main Website</Link>
          </p>
          <p className="text-sm">© {new Date().getFullYear()} Pandit Ji Services | Best Pandit Ji in {data.city} | {data.keywords.split(',')[0]}</p>
        </footer>

        {/* Floating Buttons */}
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
          aria-label="WhatsApp">
          💬
        </a>
        <a href={`tel:${data.phone}`}
          className="fixed bottom-24 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
          aria-label="Call Now">
          📞
        </a>
      </div>
    </>
  )
}
