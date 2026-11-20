'use client'

import React from 'react'
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react'

export default function MobileQuickActionBar() {
  const whatsappUrl = 'https://wa.me/919580758639?text=Namaste%20Pandit%20Sandesh%20Tiwari%20Ji%2C%20I%20want%20to%20book%20a%20puja%20service%20and%20check%20shubh%20muhurat.'

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-orange-200 shadow-[0_-6px_25px_rgba(0,0,0,0.15)] px-3 py-2">
      {/* Mini urgency banner */}
      <div className="flex items-center justify-between text-[10px] font-bold text-orange-950 px-1 pb-1">
        <span className="flex items-center gap-1 text-green-700">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
          Pandit Ji Available Now
        </span>
        <span className="text-gray-500 font-medium">Free Muhurat Consultation</span>
      </div>

      <div className="flex items-center justify-between gap-2">
        {/* 1-Tap Call */}
        <a
          href="tel:+919580758639"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gradient-to-r from-orange-600 to-amber-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md transition"
          aria-label="Call Pandit Ji Now"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call Pandit Ji</span>
        </a>

        {/* 1-Tap WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-green-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md transition"
          aria-label="WhatsApp Pandit Ji"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp (Instant)</span>
        </a>

        {/* Book Puja Button (Scroll to form) */}
        <a
          href="#booking"
          className="flex items-center justify-center py-2.5 px-3 bg-orange-100 text-orange-900 active:scale-95 font-bold text-xs rounded-xl border border-orange-200 transition"
          aria-label="Book Puja Online"
          title="Book Puja Online"
        >
          <Calendar className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
