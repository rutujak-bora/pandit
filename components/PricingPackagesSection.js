'use client'

import React, { useState } from 'react'
import { Check, Phone, MessageCircle, Sparkles, ShieldCheck, Flame, Star, Clock } from 'lucide-react'

const packages = [
  {
    id: 'basic',
    name: 'Vedic Puja (Vidhi & Mantras)',
    tag: 'Standard Vidhi',
    popular: false,
    price: '₹1,500',
    advance: 'No advance required',
    badgeColor: 'bg-gray-100 text-gray-700',
    description: 'Ideal if you already have the puja samagri at home and need an authentic Vedic priest for ritual chanting & sankalp.',
    features: [
      'Experienced Ayodhya Math Vedic Pandit Ji',
      'Complete Vedic Mantra Chanting & Vidhi Vidhan',
      'Kundali & Sankalp for Entire Family',
      'Ganesh Puja, Kalash Sthapana & Main Deity Archana',
      'Client provides hawan & puja samagri',
      'Free Muhurat selection guidance via phone',
    ],
    duration: '1.5 – 2 Hours',
    ctaText: 'Book Vidhi Only',
    waMsg: 'Namaste Pandit Ji! I want to book the Vedic Puja (Vidhi & Mantras) package. Please check date availability.'
  },
  {
    id: 'complete',
    name: 'Complete Puja + 100% Samagri Included',
    tag: '⭐ MOST POPULAR (90% Families Choose This)',
    popular: true,
    price: '₹3,500',
    advance: 'Zero Hassle — Everything Arranged',
    badgeColor: 'bg-gradient-to-r from-orange-600 to-red-600 text-white',
    description: 'Hassle-free complete package. Pandit Ji brings all 100% pure desi ghee, sacred hawan wood, navgrah samagri, flowers & items.',
    features: [
      'Senior Vedic Scholar (15+ Yrs Exp / Ved Vibhushan)',
      '100% Puja Samagri & Desi Ghee Included',
      'Sacred Hawan Wood (Mango wood), Dry Fruits & Til',
      'Navgrah Sthapana, Kalash, Janeu, Roli & Dhoop',
      'Vedic Hawan with 108 Ahutis & Poornahuti',
      'Family Ashirwad & Charan Amrit Distribution',
      'Guaranteed on-time arrival at your doorstep',
    ],
    duration: '2.5 – 3 Hours',
    ctaText: 'Book Complete + Samagri',
    waMsg: 'Namaste Pandit Ji! I want to book the Complete Puja with 100% Samagri Included package (₹3,500). Please share available slots.'
  },
  {
    id: 'grand',
    name: 'Grand Anushthan & Maha Yagya',
    tag: 'Grand Ceremonies',
    popular: false,
    price: '₹7,500',
    advance: '2 to 3 Vedic Priests',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-300',
    description: 'For Griha Pravesh, Nava Chandi, Grand Wedding ceremonies, Mahamrityunjaya Anushthan, or Sunderkand Path.',
    features: [
      '2 or 3 Senior Acharyas & Shastri Priests',
      'Grand Hawan Kund & 100% Premium Samagri',
      'Sangeetmaya / Musical Sunderkand or Chandi Yagya',
      'Vastu Dosh Nivaran & Graha Shanti Hawan',
      'Full Stage & Mandap Setup Assistance',
      'Pre-event Muhurat Consultation on Kundali',
      'Dedicated coordination till ceremony completion',
    ],
    duration: '4 – 5 Hours',
    ctaText: 'Book Grand Anushthan',
    waMsg: 'Namaste Pandit Ji! I want to book the Grand Anushthan & Maha Yagya package. Please consult with me on dates and rituals.'
  }
]

export default function PricingPackagesSection() {
  const [selectedPuja, setSelectedPuja] = useState('Griha Pravesh')

  const pujaTypes = [
    'Griha Pravesh',
    'Wedding Puja',
    'Satyanarayan Katha',
    'Rudrabhishek',
    'Navratri Puja',
    'Office Opening',
    'Vastu Shanti',
    'Maha Mrityunjaya'
  ]

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-white via-orange-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Transparent Dakshina &amp; Packages
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Popular Puja Packages — <span className="text-orange-600">No Hidden Costs</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
            Choose whether you want Pandit Ji with pure Vedic ritual guidance only, or our all-inclusive package where we bring all 100% sacred Hawan &amp; Puja Samagri to your doorstep.
          </p>

          {/* Quick Puja Filter Pill Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {pujaTypes.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPuja(p)}
                className={`text-xs md:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                  selectedPuja === p
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-orange-200 hover:border-orange-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const dynamicWaMsg = encodeURIComponent(
              `Namaste Pandit Sandesh Tiwari Ji! I am looking for the "${pkg.name}" for "${selectedPuja}". Please check available muhurat dates.`
            )

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular
                    ? 'bg-white border-2 border-orange-500 shadow-2xl md:-translate-y-2 ring-4 ring-orange-400/20'
                    : 'bg-white border border-orange-200/80 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-extrabold py-1 px-4 rounded-full shadow-md uppercase tracking-wide flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-white" /> Most Recommended
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Package Tag & Name */}
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-3 ${pkg.badgeColor}`}>
                    {pkg.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug min-h-[56px]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="mt-5 pb-5 border-b border-orange-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-extrabold text-orange-600">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">starting dakshina</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-green-700 font-semibold mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{pkg.advance}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>Duration: {pkg.duration}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      What is included:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                          <div className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="p-6 md:p-8 pt-0 mt-6 border-t border-orange-50">
                  <a
                    href={`https://wa.me/919580758639?text=${dynamicWaMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-orange-500/25'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book on WhatsApp</span>
                    </button>
                  </a>
                  <a
                    href="tel:+919580758639"
                    className="mt-2 block w-full text-center text-xs text-gray-600 hover:text-orange-600 font-medium py-1 transition"
                  >
                    📞 or Call for Custom Quote: +91 95807 58639
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-12 bg-orange-50/80 border border-orange-200 rounded-2xl p-6 text-center">
          <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
              <span className="text-xl">🕉️</span> 100% Authentic Ayodhya Math Priests
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
              <span className="text-xl">🌿</span> Pure Ganga Jal &amp; Organic Cow Ghee
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
              <span className="text-xl">🤝</span> Pay after peaceful ritual completion
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
