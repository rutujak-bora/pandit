'use client'

import React, { useState } from 'react'
import { Calendar, Sparkles, Clock, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react'

// Upcoming major festivals with exact Vedic dates & muhurats (2026 - 2027)
const upcomingFestivals = [
  {
    name: 'Sharad Navratri 2026',
    hindiName: 'शारदीय नवरात्रि २०२६',
    dates: '11 Oct – 19 Oct 2026',
    muhurat: 'Ghatasthapana: 06:19 AM – 10:14 AM',
    significance: 'Durga Saptashati Path, Akhand Jyot, Kanya Pujan',
    tag: 'Next Major Festival',
    badgeColor: 'bg-red-500 text-white',
    icon: '🪔',
    serviceSlug: 'navratri-puja'
  },
  {
    name: 'Dhanteras & Diwali 2026',
    hindiName: 'धनतेरस एवं दीपावली महालक्ष्मी पूजन',
    dates: '08 Nov – 10 Nov 2026',
    muhurat: 'Lakshmi-Ganesh Puja: 05:40 PM – 07:35 PM (Pradosh Kaal)',
    significance: 'Maha Lakshmi Sthapana, Kuber Puja, Business Bahi Khata',
    tag: 'High Demand',
    badgeColor: 'bg-amber-500 text-white',
    icon: '✨',
    serviceSlug: 'office-opening'
  },
  {
    name: 'Chhath Puja 2026',
    hindiName: 'छठ पूजा (सूर्य षष्ठी)',
    dates: '15 Nov – 16 Nov 2026',
    muhurat: 'Sandhya Arghya & Usha Arghya with Vedic Sankalp',
    significance: 'Surya Dev & Chhathi Maiya Blessings for Family Prosperity',
    tag: 'Special Ritual',
    badgeColor: 'bg-orange-500 text-white',
    icon: '🌅',
    serviceSlug: 'rudrabhishek-puja'
  },
  {
    name: 'Dev Uthani Gyaras / Vivah Muhurat 2026',
    hindiName: 'देवउठनी एकादशी (शुभ विवाह आरंभ)',
    dates: '20 Nov 2026',
    muhurat: 'Tulsi Vivah & Auspicious Wedding Muhurats Begin',
    significance: 'Start of Auspicious Hindu Weddings & Griha Pravesh',
    tag: 'Wedding Season',
    badgeColor: 'bg-purple-600 text-white',
    icon: '💑',
    serviceSlug: 'wedding-puja'
  },
  {
    name: 'Maha Shivratri 2027',
    hindiName: 'महाशिवरात्रि महा रुद्राभिषेक',
    dates: '06 Mar 2027',
    muhurat: 'Char Pahar Puja: Nishita Kaal 12:08 AM – 12:57 AM',
    significance: 'Akhand Rudrabhishek with Panchamrit, Belpatra & Shiv Sahasranama',
    tag: 'Shiv Puja',
    badgeColor: 'bg-blue-600 text-white',
    icon: '🔱',
    serviceSlug: 'rudrabhishek-puja'
  },
  {
    name: 'Griha Pravesh & Vastu Muhurats 2026-2027',
    hindiName: 'गृह प्रवेश एवं वास्तु शांति शुभ मुहूर्त',
    dates: 'Every Month Shubh Tithis',
    muhurat: 'Consult Pandit Ji with your Janma Rashi / Kundali',
    significance: 'Navagraha Havan, Vastu Dosh Nivaran, Ganga Jal Shuddhi',
    tag: 'Year-Round',
    badgeColor: 'bg-emerald-600 text-white',
    icon: '🏠',
    serviceSlug: 'griha-pravesh'
  }
]

export default function FestivalCalendarSection() {
  const [selectedFestival, setSelectedFestival] = useState(upcomingFestivals[0])

  const generateWhatsAppLink = (fest) => {
    const text = `🙏 Namaste Pandit Ji, I want to inquire and book puja for *${fest.name}* (${fest.dates}). Please share auspicious muhurat, samagri and vidhi.`
    return `https://wa.me/919580758639?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="festival-calendar" className="py-20 bg-gradient-to-b from-amber-50/50 via-white to-orange-50/60 border-t border-orange-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-orange-600 animate-spin" />
            <span>Vedic Panchang &amp; Festival Calendar 2026 – 2027</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Upcoming <span className="text-orange-600">Festivals &amp; Shubh Muhurats</span>
          </h2>
          <p className="text-lg text-gray-600">
            Book certified Vedic Acharya in advance. Muhurat consultation, complete puja samagri arrangements, and authentic Vedic chanting.
          </p>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingFestivals.map((festival, index) => (
            <div
              key={index}
              onClick={() => setSelectedFestival(festival)}
              className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between ${
                selectedFestival.name === festival.name
                  ? 'border-orange-500 shadow-md ring-2 ring-orange-200 bg-orange-50/20'
                  : 'border-orange-100 hover:border-orange-300'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-3xl p-2.5 bg-orange-100/70 rounded-xl">{festival.icon}</div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${festival.badgeColor}`}>
                    {festival.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{festival.name}</h3>
                <p className="text-xs font-semibold text-orange-700 mb-3">{festival.hindiName}</p>

                <div className="space-y-2 text-sm text-gray-600 mb-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <Calendar className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>{festival.dates}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-600">
                    <Clock className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{festival.muhurat}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                  {festival.significance}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <a
                  href={generateWhatsAppLink(festival)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-sm transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href={`/services/${festival.serviceSlug}`}
                  className="inline-flex items-center justify-center bg-orange-100 hover:bg-orange-200 text-orange-800 text-xs font-semibold py-2.5 px-3 rounded-xl transition"
                >
                  Details <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free Consultation Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>🕉️ Need Free Kundali &amp; Muhurat Consultation?</span>
            </h3>
            <p className="text-orange-100 text-sm md:text-base">
              Call or WhatsApp Pandit Sandesh Tiwari directly for auspicious date selection, samagri preparation, and complete vidhi.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919580758639"
              className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 font-bold px-5 py-3 rounded-xl shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 95807 58639</span>
            </a>
            <a
              href="https://wa.me/919580758639?text=Namaste%20Pandit%20Ji%2C%20I%20want%20to%20consult%20for%20an%20auspicious%20muhurat."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-xl shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
