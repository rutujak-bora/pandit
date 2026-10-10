import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Cookie, Lock, Eye, FileText, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Pandit Ji Services | Pandit Sandesh Tiwari',
  description: 'Privacy Policy for Pandit Ji Services (poojapandits.com). Details on personal information, Google AdSense cookies, analytics, and data protection.',
  alternates: {
    canonical: 'https://www.poojapandits.com/privacy-policy'
  }
}

export default function PrivacyPolicyPage() {
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
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-1">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-sm text-gray-500">Last updated: October 10, 2026</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            At <strong>Pandit Ji Services</strong> (accessible from{' '}
            <a href="https://www.poojapandits.com" className="text-orange-600 hover:underline">
              https://www.poojapandits.com
            </a>
            ), the privacy of our visitors and devotees is of utmost importance to us. This Privacy Policy document outlines the types of information that is collected and recorded by Pandit Ji Services and how we use and safeguard it.
          </p>

          <div className="space-y-8 text-gray-700">
            {/* Section 1 */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                1. Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">
                When you interact with our website, request a puja booking, or contact us through our online forms, phone, or WhatsApp, we may collect personal information including:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Your full name</li>
                <li>Phone number and WhatsApp contact</li>
                <li>Email address</li>
                <li>Puja / ritual preferences, desired date, and ceremony location (address/city)</li>
                <li>Any additional spiritual notes, gotra, or custom requests provided by you</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                <li>Coordinate and confirm Vedic puja ceremonies, muhurat, and ritual arrangements.</li>
                <li>Communicate with you regarding booking status, samagri checklist, and schedule updates.</li>
                <li>Answer your astrological inquiries, spiritual questions, and customer support requests.</li>
                <li>Improve website performance, ensure security, and deliver an intuitive browsing experience.</li>
              </ul>
            </section>

            {/* Section 3 - Google AdSense & Third Party Advertising (Critical for AdSense Approval) */}
            <section className="border-t border-gray-100 pt-6 bg-orange-50/50 p-6 rounded-xl border border-orange-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-orange-600" />
                3. Google AdSense &amp; Third-Party Cookies (Advertising Disclosure)
              </h2>
              <p className="leading-relaxed mb-3">
                We use <strong>Google AdSense</strong> to display advertisements on our website. Google is a third-party vendor on our site and uses cookies to serve ads to visitors based upon their visit to poojapandits.com and other websites on the internet.
              </p>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  • <strong>DoubleClick DART Cookie:</strong> Google uses the DART cookie to enable it and its partners to serve ads to our users based on their prior visits to our website or other sites across the internet.
                </p>
                <p>
                  • <strong>Opting Out:</strong> You may opt out of personalized advertising by visiting Google&apos;s Ads Settings at{' '}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    https://www.google.com/settings/ads
                  </a>
                  . Alternatively, you can opt out of third-party vendor cookies by visiting{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    aboutads.info
                  </a>
                  .
                </p>
                <p>
                  • Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are sent directly to users&apos; browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize advertising content.
                </p>
                <p>
                  • Please note that <em>Pandit Ji Services</em> has no access to or control over these cookies that are used by third-party advertisers.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-600" />
                4. Log Files &amp; Web Analytics
              </h2>
              <p className="leading-relaxed">
                Like most standard websites, Pandit Ji Services uses log files and basic analytics. These record internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks. This information is not linked to any personally identifiable information and is solely used for analyzing trends and administering the site.
              </p>
            </section>

            {/* Section 5 */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-600" />
                5. Data Security &amp; Sharing
              </h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal details. We do <strong>not sell, trade, or rent</strong> your personal contact information to third parties. Your details are strictly used to coordinate your devotional ceremonies and address your spiritual inquiries.
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Consent</h2>
              <p className="leading-relaxed">
                By using our website, you hereby consent to our Privacy Policy and agree to its terms and conditions.
              </p>
            </section>

            {/* Section 7 */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have additional questions or require more information about our Privacy Policy or data handling practices, do not hesitate to contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-sm space-y-1.5 text-gray-700">
                <p><strong>Entity:</strong> Pandit Ji Services (Pandit Sandesh Tiwari)</p>
                <p><strong>Email:</strong> <a href="mailto:contact@panditjiservices.com" className="text-orange-600 hover:underline">contact@panditjiservices.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919580758639" className="text-orange-600 hover:underline">+91 95807 58639</a></p>
                <p><strong>Address:</strong> Vishvas Khand 4, Near Dukh Harni Shailani Mata Mandir, Gomti Nagar, Lucknow, UP - 226010</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center mt-12 border-t border-gray-800 text-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/about" className="hover:text-orange-400">About Us</Link>
            <Link href="/contact" className="hover:text-orange-400">Contact Us</Link>
            <Link href="/privacy-policy" className="text-orange-400 font-semibold">Privacy Policy</Link>
          </div>
          <p>© {new Date().getFullYear()} Pandit Ji Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
