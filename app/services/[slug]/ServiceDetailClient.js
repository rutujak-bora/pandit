'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Phone, MessageCircle, Calendar, Clock, CheckCircle2, ArrowLeft, Sparkles, BookOpen, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ServiceDetailClient({ service }) {
    const router = useRouter()

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-orange-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <Button onClick={() => router.push('/')} className="bg-orange-600 hover:bg-orange-700">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back Home
                    </Button>
                </div>
            </div>
        )
    }

    const whatsappMessage = encodeURIComponent(`Namaste! I would like to book ${service.title}. Please share details.`)
    const whatsappLink = `https://wa.me/919580758639?text=${whatsappMessage}`

    return (
        <div className="min-h-screen bg-white">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl">
                                🕉️
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-orange-600">Pandit Ji Services</p>
                                <p className="text-xs text-gray-600">Lucknow &amp; Delhi NCR</p>
                            </div>
                        </Link>

                        <div className="flex items-center space-x-3">
                            <Link href="/#contact">
                                <Button className="bg-orange-600 hover:bg-orange-700">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${service.heroImage})`,
                        filter: 'brightness(0.4)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/80" />

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-4">
                            <Link href="/" className="text-orange-200 hover:text-orange-100 inline-flex items-center">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Services
                            </Link>
                        </div>
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                        <p className="text-xl text-orange-100">Complete Vedic Ceremony with Traditional Rituals</p>
                    </div>
                </div>
            </section>

            {/* Quick Action Bar */}
            <div className="bg-orange-50 border-b border-orange-100 sticky top-[72px] z-40">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                WhatsApp Booking
                            </Button>
                        </a>
                        <a href="tel:+919580758639">
                            <Button size="sm" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                                <Phone className="w-4 h-4 mr-2" />
                                Call: +91 95807 58639
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Auspicious Dates Alert Banner (only if service has featured dates) */}
            {service.auspiciousTime && service.auspiciousTime.periods && service.auspiciousTime.periods.some(p => p.includes('2026')) && (
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center justify-center gap-3 flex-wrap text-center">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p className="font-semibold text-sm md:text-base">
                                {service.slug === 'pitru-paksha-shraddh'
                                    ? '🕉️ पितृपक्ष 2026: 27 सितम्बर – 10 अक्टूबर 2026 | सर्व पितृ अमावस्या: 10 Oct 2026 — Book Now!'
                                    : '⭐ Sharad Navratri 2026: 11 Oct – 19 Oct 2026 | Ghatasthapana Muhurat: 06:19 AM – 10:12 AM on 11 Oct — Book Now!'}
                            </p>
                            <a href="tel:+919580758639" className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold hover:bg-orange-50 transition-colors">
                                +91 95807 58639
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Significance Section */}
                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Sparkles className="w-8 h-8 text-orange-600" />
                                <h2 className="text-3xl font-bold text-gray-900">{service.significance.title}</h2>
                            </div>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-6">{service.significance.content}</p>
                                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Spiritual Aspects:</h3>
                                    <ul className="space-y-2">
                                        {service.significance.keyPoints.map((point, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Vedic Scripture Reference Box (Pitru Puja only) */}
                        {service.scripture && (
                            <section>
                                <div className="flex items-center space-x-3 mb-6">
                                    <BookOpen className="w-8 h-8 text-orange-600" />
                                    <h2 className="text-3xl font-bold text-gray-900">{service.scripture.title}</h2>
                                </div>
                                <div className="space-y-4">
                                    {service.scripture.references.map((ref, index) => (
                                        <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200 p-6 rounded-xl">
                                            <h3 className="text-lg font-bold text-orange-700 mb-2">📜 {ref.source}</h3>
                                            <p className="text-gray-800 font-medium italic mb-2 text-lg">"{ref.text}"</p>
                                            <p className="text-gray-600 text-sm">{ref.meaning}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Benefits Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.benefits.title}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="border-2 border-orange-200">
                                    <CardHeader className="bg-gradient-to-br from-orange-50 to-red-50">
                                        <CardTitle className="text-xl text-orange-600">Spiritual Benefits</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <ul className="space-y-3">
                                            {service.benefits.spiritual.map((benefit, index) => (
                                                <li key={index} className="flex items-start space-x-2">
                                                    <span className="text-orange-600 mt-1">•</span>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-2 border-orange-200">
                                    <CardHeader className="bg-gradient-to-br from-orange-50 to-red-50">
                                        <CardTitle className="text-xl text-orange-600">Practical Benefits</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <ul className="space-y-3">
                                            {service.benefits.practical.map((benefit, index) => (
                                                <li key={index} className="flex items-start space-x-2">
                                                    <span className="text-orange-600 mt-1">•</span>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* Auspicious Time Section */}
                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Calendar className="w-8 h-8 text-orange-600" />
                                <h2 className="text-3xl font-bold text-gray-900">{service.auspiciousTime.title}</h2>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-200">
                                <p className="text-gray-700 leading-relaxed mb-6">{service.auspiciousTime.content}</p>
                                <div className="space-y-3">
                                    {service.auspiciousTime.periods.map((period, index) => (
                                        <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                                            <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{period}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Navadurga 9-Day Table (Navratri only) */}
                        {service.navadurga && (
                            <section>
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="text-3xl">🪔</span>
                                    <h2 className="text-3xl font-bold text-gray-900">नव दुर्गा — 9 Forms of Goddess Durga | Navratri 2026</h2>
                                </div>
                                <div className="overflow-x-auto rounded-2xl border-2 border-orange-200">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                                                <th className="px-4 py-3 text-left">Day / Date</th>
                                                <th className="px-4 py-3 text-left">Devi Form</th>
                                                <th className="px-4 py-3 text-left">Auspicious Color</th>
                                                <th className="px-4 py-3 text-left hidden md:table-cell">Vedic Mantra</th>
                                                <th className="px-4 py-3 text-left hidden lg:table-cell">Special Bhog</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {service.navadurga.map((devi, index) => (
                                                <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
                                                    <td className="px-4 py-3 font-bold text-orange-700">Day {devi.day}<br /><span className="text-xs font-normal text-gray-500">{devi.date}</span></td>
                                                    <td className="px-4 py-3">
                                                        <span className="font-semibold text-gray-900">{devi.name}</span>
                                                        <br /><span className="text-xs text-gray-500">{devi.meaning}</span>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span className="inline-block bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-medium">{devi.color}</span>
                                                    </td>
                                                    <td className="px-4 py-3 hidden md:table-cell font-medium text-gray-700" style={{ fontFamily: 'serif' }}>{devi.mantra}</td>
                                                    <td className="px-4 py-3 hidden lg:table-cell text-gray-600">{devi.bhog}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-sm text-gray-500 text-center">
                                    📍 Book Pandit for Navratri Kalash Sthapana at home — <a href="tel:+919580758639" className="text-orange-600 font-semibold hover:underline">+91 95807 58639</a> | <a href="https://www.poojapandits.com/services/navratri-puja" className="text-orange-600 hover:underline">poojapandits.com/services/navratri-puja</a>
                                </p>
                            </section>
                        )}

                        {/* Procedure Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.procedure.title}</h2>
                            <div className="space-y-4">
                                {service.procedure.steps.map((step, index) => (
                                    <Card key={index} className="border-l-4 border-orange-600 hover:shadow-lg transition-shadow">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.name}</h3>
                                                    <p className="text-gray-600">{step.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="mt-6 bg-orange-50 p-4 rounded-xl">
                                <p className="text-gray-700">
                                    <strong>Estimated Duration:</strong> {service.procedure.duration}
                                </p>
                            </div>
                        </section>

                        {/* Gallery Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {service.gallery.map((image, index) => (
                                    <div key={index} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                                        <img
                                            src={image}
                                            alt={`${service.title} ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Additional Info Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.additionalInfo.title}</h2>
                            <Card className="border-2 border-orange-200">
                                <CardContent className="pt-6">
                                    <ul className="space-y-4">
                                        {service.additionalInfo.points.map((point, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>

                        {/* FAQ Section (for AI Mode / Google search) */}
                        {service.faqs && service.faqs.length > 0 && (
                            <section>
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="text-3xl">❓</span>
                                    <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                                </div>
                                <Accordion type="single" collapsible className="space-y-3">
                                    {service.faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`faq-${index}`} className="border-2 border-orange-200 rounded-xl px-4 overflow-hidden">
                                            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600 py-4">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                                <div className="mt-6 bg-orange-50 border border-orange-200 p-4 rounded-xl text-center text-sm text-gray-600">
                                    📞 For more questions, call/WhatsApp Pandit Sandesh Tiwari: <a href="tel:+919580758639" className="text-orange-600 font-bold hover:underline">+91 95807 58639</a>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-6">
                            {/* Booking Card */}
                            <Card className="border-2 border-orange-600 shadow-xl">
                                <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
                                    <CardTitle className="text-2xl">Book This Puja</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-4">
                                    <p className="text-gray-700">Schedule your {service.title} with experienced Pandit Ji</p>

                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            WhatsApp Booking
                                        </Button>
                                    </a>

                                    <a href="tel:+919580758639" className="block">
                                        <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                                            <Phone className="w-5 h-5 mr-2" />
                                            Call Now
                                        </Button>
                                    </a>

                                    <div className="pt-4 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span>15+ Years Experience</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span>Authentic Vedic Rituals</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span>Free Muhurat Consultation</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span>All Samagri Available</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Samagri Included */}
                            <Card>
                                <CardHeader className="bg-orange-50">
                                    <CardTitle className="text-lg">Samagri Included</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        {service.samagriIncluded.map((item, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <span className="text-orange-600">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Contact Info */}
                            <Card className="bg-gradient-to-br from-orange-50 to-red-50">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center space-x-2 text-gray-700">
                                            <Phone className="w-4 h-4 text-orange-600" />
                                            <span>+91 95807 58639</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-700">
                                            <MessageCircle className="w-4 h-4 text-orange-600" />
                                            <span>+91 95807 58639</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
                aria-label="WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>

            {/* Floating Call Button */}
            <a
                href="tel:+919580758639"
                className="fixed bottom-24 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
                aria-label="Call Now"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    )
}
