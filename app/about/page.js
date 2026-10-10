import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MapPin, Clock, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'About Us - Pandit Sandesh Tiwari | Vedic Pandit Ji Services',
  description: 'Learn about Pandit Sandesh Tiwari, honored with the Ved Vibhushan Award. Over 15 years of authentic Vedic puja, karmakanda, and ritual experience across Lucknow and Delhi NCR.',
  alternates: {
    canonical: 'https://www.poojapandits.com/about'
  }
}

export default function AboutPage() {
  const whatsappMessage = encodeURIComponent('Namaste Pandit Ji! I would like to inquire about your Vedic puja services.')
  const whatsappLink = `https://wa.me/919580758639?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl">
              🕉️
            </div>
            <div>
              <p className="text-xl font-bold text-orange-600">Pandit Ji Services</p>
              <p className="text-xs text-gray-500">Lucknow & Delhi NCR</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-600 px-3 py-1.5 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white py-14 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs uppercase tracking-wider font-semibold mb-3">
            Sacred Vedic Tradition
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About Pandit Sandesh Tiwari</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            Ved Vibhushan Awardee, learned Saryuparin Brahman carrying forward sacred Vedic wisdom and traditional rituals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl flex-1 space-y-12">
        {/* Profile Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 grid md:grid-cols-3 gap-8 items-start">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-orange-100">
              <img
                src="/about.jpg"
                alt="Pandit Sandesh Tiwari performing Vedic Puja"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-orange-600">15+ Years</p>
              <p className="text-xs text-gray-600 font-medium">Sacred Karmakanda Experience</p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4 text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Devoted to Authentic Vedic Vidhi &amp; Rituals
            </h2>
            <p className="leading-relaxed">
              Pandit Sandesh Tiwari ji is a highly respected and learned <strong>Saryuparin Brahman</strong> associated with one of the most venerable math in <strong>Ayodhya</strong>. For more than 15 years, he has conducted sacred Hindu anushthanas, Havans, and puja ceremonies for devotees across Lucknow, Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.
            </p>
            <p className="leading-relaxed text-gray-600">
              Every ritual is performed in strict adherence to Vedic scriptures (Shastras) with clear pronunciation of Sanskrit mantras, proper sankalpa, and a deep explanation of each ritual’s significance so that the devotees and their families feel spiritually connected.
            </p>

            <div className="pt-2">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Academic &amp; Spiritual Qualifications:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 bg-orange-50/70 p-3 rounded-xl border border-orange-100">
                  <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Ved Vibhushan Award</h4>
                    <p className="text-xs text-gray-600">Honored by the Ministry of Education, Delhi</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-orange-50/70 p-3 rounded-xl border border-orange-100">
                  <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Acharya in Navyavyakaran</h4>
                    <p className="text-xs text-gray-600">Sampurnanand Sanskrit Vishwavidyalay, Varanasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-orange-50/70 p-3 rounded-xl border border-orange-100">
                  <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">M.A. in Sanskrit</h4>
                    <p className="text-xs text-gray-600">Shri Lal Bahadur Shastri National Sanskrit University, New Delhi</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-orange-50/70 p-3 rounded-xl border border-orange-100">
                  <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Diploma in Karmkand & Astrology</h4>
                    <p className="text-xs text-gray-600">Shri Lal Bahadur Shastri National Sanskrit University, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values / Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Principles &amp; Commitment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-orange-100 bg-orange-50/40">
              <ShieldCheck className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Authentic Scriptural Vidhi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We perform pujas as prescribed in the Shastras, avoiding shortcuts. Every mantra is chanted with accurate Vedic intonations.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-orange-100 bg-orange-50/40">
              <HeartHandshake className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Transparent &amp; Devotional</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Full transparency regarding samagri requirements, dakshina, muhurat timings, and rituals with no hidden surprises.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-orange-100 bg-orange-50/40">
              <CheckCircle2 className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Doorstep &amp; Temple Services</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Available for home ceremonies, office pujas, corporate vastu, and sacred temple rituals across Lucknow and Delhi NCR.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Planning a Sacred Ceremony?</h2>
          <p className="text-orange-100 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Reach out directly to Pandit Sandesh Tiwari ji for muhurat consultations, puja bookings, or spiritual guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+919580758639"
              className="bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors shadow"
            >
              Call: +91 95807 58639
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center mt-12 border-t border-gray-800 text-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/about" className="text-orange-400 font-semibold">About Us</Link>
            <Link href="/contact" className="hover:text-orange-400">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</Link>
          </div>
          <p>© {new Date().getFullYear()} Pandit Ji Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
