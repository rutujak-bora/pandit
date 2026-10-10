import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Pandit Ji Services | Lucknow & Delhi NCR',
  description: 'Contact Pandit Sandesh Tiwari for Vedic puja booking, astrological consultations, and muhurat inquiries in Lucknow & Delhi NCR. Phone: +91 95807 58639.',
  alternates: {
    canonical: 'https://www.poojapandits.com/contact'
  }
}

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent('Namaste Pandit Ji! I would like to book a puja. Please share details.')
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
              href="/about"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-600 px-3 py-1.5 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white py-14 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs uppercase tracking-wider font-semibold mb-3">
            Direct &amp; Fast Response
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contact &amp; Bookings</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            Connect directly with Pandit Sandesh Tiwari for puja consultations, shubh muhurat, and ritual arrangements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl flex-1 space-y-12">
        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="tel:+919580758639"
            className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Phone Call</h3>
            <p className="text-sm text-gray-500 mb-2">Speak directly with Pandit Ji</p>
            <p className="text-orange-600 font-bold text-base">+91 95807 58639</p>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp Chat</h3>
            <p className="text-sm text-gray-500 mb-2">Instant responses &amp; samagri lists</p>
            <p className="text-green-600 font-bold text-base">+91 95807 58639</p>
          </a>

          <a
            href="mailto:contact@panditjiservices.com"
            className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Email Inquiries</h3>
            <p className="text-sm text-gray-500 mb-2">Corporate &amp; ceremony inquiries</p>
            <p className="text-orange-600 font-bold text-sm truncate">contact@panditjiservices.com</p>
          </a>
        </div>

        {/* Location & Office Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-orange-600" />
            Physical Locations &amp; Service Coverage
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lucknow Locations */}
            <div className="p-6 rounded-xl bg-orange-50/60 border border-orange-100 space-y-4">
              <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                Uttar Pradesh
              </span>
              <h3 className="text-xl font-bold text-gray-900">Lucknow Centers</h3>
              
              <div className="space-y-3 text-sm text-gray-700">
                <div className="border-b border-orange-200/60 pb-3">
                  <p className="font-semibold text-gray-900">Main Office:</p>
                  <p className="text-gray-600 leading-relaxed">
                    Vishvas Khand 4, Near Dukh Harni Shailani Mata Mandir, Jugauli Crossing, Gomti Nagar, Lucknow - 226010
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Branch Office:</p>
                  <p className="text-gray-600 leading-relaxed">
                    b3/198 Vishwash Khand, Gomti Nagar, Lucknow - 226010
                  </p>
                </div>
              </div>
              <p className="text-xs text-orange-700 font-medium">
                Covering Gomti Nagar, Indira Nagar, Aliganj, Hazratganj, Ashiyana, and all adjoining Lucknow localities.
              </p>
            </div>

            {/* Delhi NCR Base */}
            <div className="p-6 rounded-xl bg-orange-50/60 border border-orange-100 space-y-4">
              <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                Delhi NCR
              </span>
              <h3 className="text-xl font-bold text-gray-900">Delhi NCR Base</h3>

              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Delhi Address:</p>
                  <p className="text-gray-600 leading-relaxed">
                    Katwaria Sarai, New Delhi - 110016
                  </p>
                </div>
                <div className="pt-2">
                  <p className="font-semibold text-gray-900">NCR Service Coverage:</p>
                  <p className="text-gray-600 leading-relaxed">
                    New Delhi, South Delhi, Dwarka, Rohini, Noida, Greater Noida, Gurgaon / Gurugram, Faridabad, and Ghaziabad.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 pt-2 border-t border-orange-200/60">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>Available 7 Days a Week: 6:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Book online shortcut */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Book Puja on the Main Page</h2>
          <p className="text-orange-100 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Prefer using our interactive online booking form? Jump back to the homepage to select your puja, preferred date, and venue.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors shadow"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Go to Online Booking Form
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center mt-12 border-t border-gray-800 text-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/about" className="hover:text-orange-400">About Us</Link>
            <Link href="/contact" className="text-orange-400 font-semibold">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</Link>
          </div>
          <p>© {new Date().getFullYear()} Pandit Ji Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
