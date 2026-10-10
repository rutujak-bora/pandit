'use client'

import React, { useState } from 'react'
import { CheckSquare, Share2, Download, Copy, Check, MessageCircle, Sparkles } from 'lucide-react'

const samagriTemplates = {
  'griha-pravesh': {
    title: 'Griha Pravesh Puja Samagri List',
    hindiTitle: 'गृह प्रवेश पूजन सामग्री सूची',
    description: 'Complete auspicious samagri checklist for new home & housewarming puja.',
    items: [
      'Ganga Jal & Panchamrit (Milk, Curd, Ghee, Honey, Sugar)',
      'Kalash (Copper/Brass) with Coconut & Mango leaves',
      'Roli, Akshat (Clean Rice), Haldi, Chandan, Kumkum',
      'Havan Kund, Dry Mango Wood (Aam ki Lakdi), Havan Samagri',
      'Pure Desi Cow Ghee (500g - 1kg)',
      'Dhoop, Agarbatti, Camphor (Karpuram), Deepak & Wicks',
      'Fresh Yellow/Red Flowers & 2 Flower Garlands (Mala)',
      '5 Types of Seasonal Fruits & Paan leaves (Betel leaves with Supari & Clove)',
      'Janeu (Sacred thread), Mauli (Kalawa), Red/Yellow cloth piece',
      'Sweets for Prasad (Laddoo or Peda)'
    ]
  },
  'wedding-puja': {
    title: 'Vivah Sanskar (Wedding) Samagri List',
    hindiTitle: 'विवाह संस्कार पूजन सामग्री सूची',
    description: 'Essential Vedic rituals items for Hindu Vivah Sanskar before Agni.',
    items: [
      'Havan Kund, Samidha (dry wood), Havan Samagri, Camphor',
      'Pure Ghee (1kg - 2kg) & Havan Prasad',
      'Sindoor, Mangalsutra, Varmala (Jai Mala - 2 pieces)',
      'Roli, Akshat, Haldi powder, Haldi Gaath, Sandalwood paste',
      'Kalash with Coconut, Mango leaves, Gangajal',
      'Kheel, Batashe, Dry Fruits, 5 Types of Fresh Fruits',
      'Red Chunri, Yellow cloth for Gathbandhan, Janeu (2 pairs)',
      'Paan, Supari, Laung, Elaichi, Honey, Curd, Ganga Jal',
      'Sil Batta (for Ashmarohana ritual) and Laja Homam items'
    ]
  },
  'rudrabhishek-puja': {
    title: 'Rudrabhishek Puja Samagri List',
    hindiTitle: 'रुद्राभिषेक पूजन सामग्री सूची',
    description: 'Sacred items for Lord Shiva Abhishek & Mahadev blessings.',
    items: [
      'Fresh Cow Milk, Curd, Desi Ghee, Honey, Sugar (Panchamrit)',
      'Ganga Jal, Rose Water, Sugarcane Juice (optional)',
      'Belpatra (clean, unblemished), Dhatura, Bhaang, Shami leaves',
      'White Flowers, Kaner, Lotus, Janeu (for Shivling & Nandi)',
      'White Chandan, Bhasma (Vibhuti), Akshat (Unbroken rice)',
      'Dhoop, Deep, Camphor, Paan, Supari, Clove, Cardamom',
      'Maha Mrityunjay Japa Mala & Shiva Sahasranama book',
      'Seasonal Fruits, Coconut, Dry fruits for Shiva Bhog'
    ]
  },
  'satyanarayan-katha': {
    title: 'Shri Satyanarayan Vrat Katha Samagri',
    hindiTitle: 'सत्यनारायण व्रत कथा सामग्री सूची',
    description: 'Traditional items for family peace, prosperity, and blessings.',
    items: [
      'Panjiri Prasad (Roasted Wheat flour with Ghee, Sugar, Banana & Tulsi)',
      'Banana Tree Stems (for Mandap) & Fresh Tulsi Dal',
      'Chowki (Wooden stool) with Yellow cloth for Vishnu Bhagwan',
      'Kalash with Coconut, 5 Mango Leaves, Gangajal',
      'Panchamrit (Milk, Curd, Honey, Sugar, Ghee)',
      'Roli, Moli (Kalawa), Akshat, Chandan, Janeu',
      'Dhoop, Agarbatti, Ghee Deepak, Camphor',
      '5 Paan leaves, Supari, Clove, Cardamom, Seasonal Fruits'
    ]
  }
}

export default function SamagriChecklistSection() {
  const [activeTab, setActiveTab] = useState('griha-pravesh')
  const [copied, setCopied] = useState(false)

  const currentSamagri = samagriTemplates[activeTab]

  const getFullChecklistText = () => {
    return `🕉️ *${currentSamagri.title}* (${currentSamagri.hindiTitle})\nProvided by Pandit Sandesh Tiwari (poojapandits.com)\n\n📋 *Samagri Checklist:*\n${currentSamagri.items.map((it, idx) => `${idx + 1}. ${it}`).join('\n')}\n\n📞 For Muhurat Consultation & Puja Booking: +91 95807 58639\n🌐 Website: https://www.poojapandits.com`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullChecklistText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getFullChecklistText())
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
  }

  return (
    <section id="samagri-checklist" className="py-20 bg-white border-t border-orange-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-4">
            <CheckSquare className="w-4 h-4 text-emerald-600" />
            <span>Free Puja Preparation Tools</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Puja Samagri <span className="text-orange-600">Checklist &amp; Guide</span>
          </h2>
          <p className="text-lg text-gray-600">
            Download or share complete Vedic samagri lists directly on WhatsApp with family members. We also provide complete samagri arrangements on request.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {Object.entries(samagriTemplates).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm ${
                activeTab === key
                  ? 'bg-orange-600 text-white shadow-orange-200 shadow-md scale-105'
                  : 'bg-orange-50 text-gray-700 hover:bg-orange-100 border border-orange-200'
              }`}
            >
              {data.title.split(' ')[0]} {data.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Samagri Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50/40 via-white to-amber-50/30 rounded-2xl border-2 border-orange-200 shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-orange-100 gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{currentSamagri.title}</h3>
              <p className="text-sm font-semibold text-orange-700">{currentSamagri.hindiTitle}</p>
              <p className="text-xs text-gray-500 mt-1">{currentSamagri.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy List'}</span>
              </button>
              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold shadow-sm transition"
              >
                <Share2 className="w-4 h-4" />
                <span>Share on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="grid md:grid-cols-2 gap-3.5 mb-8">
            {currentSamagri.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white p-3 rounded-xl border border-orange-100 hover:border-orange-300 transition shadow-xs"
              >
                <div className="w-5 h-5 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-sm text-gray-800 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Samagri Arrangement Callout */}
          <div className="bg-orange-100/70 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-orange-200">
            <div className="flex items-center gap-3">
              <div className="text-2xl">📦</div>
              <div className="text-xs sm:text-sm text-gray-800">
                <span className="font-bold text-gray-900">Don't have time to buy samagri? </span>
                Pandit Sandesh Tiwari can bring 100% pure, authentic samagri directly to your home!
              </div>
            </div>
            <a
              href={`https://wa.me/919580758639?text=${encodeURIComponent(`Namaste Pandit Ji, please arrange full samagri for ${currentSamagri.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold flex-shrink-0 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Arrange Samagri For Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
