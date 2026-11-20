'use client'

import React, { useState } from 'react'
import { Calendar, Clock, Star, MapPin, CheckCircle2, Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

const muhuratDatabase = {
  'griha-pravesh': {
    name: 'Griha Pravesh (Housewarming)',
    icon: '🏠',
    description: 'Vastu Shanti & auspicious entry into your new home for lifelong peace and prosperity.',
    upcomingDates: [
      { date: 'Friday, 20 Nov 2026', tithi: 'Devutthana Ekadashi', time: '06:48 AM – 10:22 AM', nakshatra: 'Uttara Bhadrapada', rating: '⭐️ Best Muhurat' },
      { date: 'Thursday, 26 Nov 2026', tithi: 'Margashirsha Krishna Dwitiya', time: '07:15 AM – 11:40 AM', nakshatra: 'Rohini', rating: '⭐️ Auspicious' },
      { date: 'Friday, 04 Dec 2026', tithi: 'Margashirsha Krishna Dashami', time: '06:58 AM – 09:30 AM', nakshatra: 'Hasta', rating: '⭐️ Good' },
      { date: 'Wednesday, 20 Jan 2027', tithi: 'Pausha Shukla Trayodashi', time: '07:10 AM – 12:15 PM', nakshatra: 'Mrigashirsha', rating: '⭐️ Highly Auspicious' },
      { date: 'Friday, 29 Jan 2027', tithi: 'Magha Krishna Saptami', time: '07:05 AM – 10:45 AM', nakshatra: 'Chitra', rating: '⭐️ Auspicious' },
    ]
  },
  'wedding-puja': {
    name: 'Vivah Sanskar (Wedding Ceremony)',
    icon: '💑',
    description: 'Sacred seven vows before the divine Agni according to your birth nakshatra and gotra.',
    upcomingDates: [
      { date: 'Saturday, 21 Nov 2026', tithi: 'Margashirsha Shukla Dwitiya', time: '05:30 PM – 11:45 PM', nakshatra: 'Revati', rating: '⭐️ Shubh Vivah' },
      { date: 'Wednesday, 25 Nov 2026', tithi: 'Margashirsha Shukla Shashthi', time: '06:00 PM – 02:15 AM', nakshatra: 'Uttara Ashadha', rating: '⭐️ Prime Date' },
      { date: 'Tuesday, 01 Dec 2026', tithi: 'Margashirsha Krishna Ekadashi', time: '07:00 PM – 03:30 AM', nakshatra: 'Rohini', rating: '⭐️ Shubh Vivah' },
      { date: 'Sunday, 06 Dec 2026', tithi: 'Margashirsha Krishna Trayodashi', time: '05:45 PM – 01:10 AM', nakshatra: 'Swati', rating: '⭐️ Auspicious' },
      { date: 'Friday, 22 Jan 2027', tithi: 'Magha Shukla Pratipada', time: '06:30 PM – 02:40 AM', nakshatra: 'Uttara Phalguni', rating: '⭐️ Best Date' },
    ]
  },
  'satyanarayan': {
    name: 'Satyanarayan Katha & Hawan',
    icon: '🕉️',
    description: 'Purnima, Sankranti, and monthly auspicious days for family bliss and fulfilling desires.',
    upcomingDates: [
      { date: 'Tuesday, 24 Nov 2026', tithi: 'Kartik Purnima (Dev Diwali)', time: 'Full Day Auspicious / Pradosh', nakshatra: 'Krittika', rating: '⭐️ Maha Purnima' },
      { date: 'Wednesday, 23 Dec 2026', tithi: 'Margashirsha Purnima', time: 'Morning 07:30 AM – 11:30 AM', nakshatra: 'Mrigashirsha', rating: '⭐️ Auspicious' },
      { date: 'Thursday, 14 Jan 2027', tithi: 'Makar Sankranti', time: '08:15 AM – 02:30 PM (Punya Kaal)', nakshatra: 'Shravana', rating: '⭐️ Maha Punya Kaal' },
      { date: 'Friday, 22 Jan 2027', tithi: 'Pausha Purnima', time: 'Morning / Evening', nakshatra: 'Punarvasu', rating: '⭐️ Very Auspicious' },
    ]
  },
  'office-opening': {
    name: 'New Business & Office Opening',
    icon: '🏢',
    description: 'Lakshmi-Kuber & Ganesh Sthapana for exponential growth, wealth, and vastu prosperity.',
    upcomingDates: [
      { date: 'Thursday, 19 Nov 2026', tithi: 'Shukla Dashami', time: '08:30 AM – 11:00 AM (Abhijit)', nakshatra: 'Purva Bhadrapada', rating: '⭐️ Business Growth' },
      { date: 'Monday, 30 Nov 2026', tithi: 'Krishna Saptami', time: '09:15 AM – 12:30 PM (Amrit Kaal)', nakshatra: 'Pushya (Supreme)', rating: '⭐️ Pushya Nakshatra' },
      { date: 'Friday, 11 Dec 2026', tithi: 'Shukla Tritiya', time: '08:45 AM – 11:45 AM', nakshatra: 'Shravana', rating: '⭐️ Prosperity' },
      { date: 'Wednesday, 20 Jan 2027', tithi: 'Shukla Trayodashi', time: '09:00 AM – 12:15 PM (Abhijit)', nakshatra: 'Mrigashirsha', rating: '⭐️ Best Muhurat' },
    ]
  },
  'rudrabhishek': {
    name: 'Rudrabhishek & Mahamrityunjaya',
    icon: '🔱',
    description: 'Pradosh Vrat, Masik Shivratri, and Somwar for divine health, protection & obstacle removal.',
    upcomingDates: [
      { date: 'Saturday, 21 Nov 2026', tithi: 'Shani Pradosh Vrat', time: 'Pradosh Kaal: 05:35 PM – 08:12 PM', nakshatra: 'Revati', rating: '⭐️ Shani Pradosh' },
      { date: 'Monday, 07 Dec 2026', tithi: 'Somwar Shiv Puja', time: '06:30 AM – 10:00 AM', nakshatra: 'Vishakha', rating: '⭐️ Somwar Special' },
      { date: 'Tuesday, 08 Dec 2026', tithi: 'Masik Shivratri', time: 'Nishita Kaal / Evening', nakshatra: 'Anuradha', rating: '⭐️ Shivratri' },
      { date: 'Sunday, 20 Dec 2026', tithi: 'Ravi Pradosh Vrat', time: '05:38 PM – 08:15 PM', nakshatra: 'Bharani', rating: '⭐️ Ravi Pradosh' },
    ]
  }
}

export default function ShubhMuhuratFinder() {
  const [selectedCategory, setSelectedCategory] = useState('griha-pravesh')
  const currentPuja = muhuratDatabase[selectedCategory]

  return (
    <section id="muhurat-finder" className="py-20 bg-gradient-to-br from-amber-50/70 via-orange-50 to-white border-y border-orange-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-200 p-6 md:p-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-red-600" /> Free Vedic Astrology Service
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Shubh Muhurat Finder — <span className="text-orange-600">Select &amp; Book In 1-Click</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Calculated by Pandit Sandesh Tiwari (Acharya, Sampurnanand Sanskrit Vishwavidyalay). Pick your ceremony to view verified dates and reserve your date before slots are taken.
            </p>
          </div>

          {/* Ceremony Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(muhuratDatabase).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105'
                    : 'bg-orange-50/80 text-gray-700 hover:bg-orange-100 border border-orange-200'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name.split('(')[0]}</span>
              </button>
            ))}
          </div>

          {/* Selected Ceremony Info */}
          <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent p-4 rounded-2xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 border border-orange-200">
            <div>
              <h3 className="font-bold text-gray-900 text-base md:text-lg flex items-center gap-2">
                <span>{currentPuja.icon}</span>
                <span>{currentPuja.name}</span>
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">{currentPuja.description}</p>
            </div>
            <a
              href="tel:+919580758639"
              className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex-shrink-0 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Get Custom Kundali Muhurat</span>
            </a>
          </div>

          {/* Muhurat Dates Cards Table */}
          <div className="space-y-3">
            {currentPuja.upcomingDates.map((slot, index) => {
              const waText = encodeURIComponent(
                `Namaste Pandit Ji! I want to check slot availability and book "${currentPuja.name}" on "${slot.date}" (${slot.time}).`
              )

              return (
                <div
                  key={index}
                  className="bg-white border border-orange-100 hover:border-orange-300 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-gray-900 text-sm md:text-base">
                          {slot.date}
                        </span>
                        <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {slot.rating}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-orange-600" />
                          <strong className="text-gray-700">Shubh Muhurat:</strong> {slot.time}
                        </span>
                        <span>• Tithi: <strong>{slot.tithi}</strong></span>
                        <span>• Nakshatra: <strong>{slot.nakshatra}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <a
                      href={`https://wa.me/919580758639?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-initial"
                    >
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow transition flex items-center justify-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Reserve This Date</span>
                      </button>
                    </a>
                    <a href="tel:+919580758639" className="hidden sm:inline-block">
                      <button className="bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold py-2.5 px-3 rounded-xl transition">
                        Call Pandit Ji
                      </button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            📍 Custom muhurats according to Husband &amp; Wife gotra/kundali also available on direct call.
          </div>
        </div>
      </div>
    </section>
  )
}
