'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, MessageCircle, Calendar, Clock, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react'
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
                                <p className="text-xs text-gray-600">Delhi NCR</p>
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
