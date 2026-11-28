'use client'

import React, { useState } from 'react'
import { CheckSquare, Share2, Copy, Check, MessageCircle, Sparkles, Search, RotateCcw, Phone, ShoppingBag } from 'lucide-react'

export const poojaSamagriData = {
  'yagyopaveet': {
    id: 'yagyopaveet',
    num: '1',
    title: 'यज्ञोपवीत संस्कार पूजन सामग्री',
    englishTitle: 'Yagyopaveet / Janeu Sanskar Samagri List',
    badge: '57 आइटम्स (मात्रा सहित)',
    icon: '🧵',
    description: 'जनेऊ (उपनयन संस्कार) एवं यज्ञ-हवन हेतु सम्पूर्ण वैदिक सामग्री सूची प्रमाणिक मात्रा अनुसार।',
    items: [
      'रोली: २५ ग्राम',
      'अबीर: २५ ग्राम',
      'सिन्दूर: १० ग्राम',
      'कपूर: १०० ग्राम',
      'धूप, अगरबत्ती: १ पैकेट',
      'पीला चन्दन: २५ ग्राम',
      'भस्म: १ पैकेट',
      'जनेऊ (यज्ञोपवीत): १५ जोड़ी',
      'मौली / कलावा: ५ नग',
      'पान के पत्ते: १५ नग',
      'सुपारी: २५ नग',
      'लौंग: १० ग्राम',
      'इलायची: १० ग्राम',
      'गंगाजल: आवश्यकतानुसार',
      'फूल: २ किलोग्राम',
      'फूल की मालाएँ: ८ नग',
      'तुलसी, दूर्वा, बिल्वपत्र: आवश्यकतानुसार',
      'पिसी हल्दी: १०० ग्राम',
      'पेड़ा (मिठाई प्रसाद): ५०० ग्राम',
      'ऋतुफल: १५ नग',
      'नारियल (पानी वाला): २ नग',
      'गरी का गोला (सूखा नारियल): १ नग',
      'गुड़: २५० ग्राम',
      'पंचमेवा: २५० ग्राम',
      'पंचामृत: दूध, दही, घी, शहद, चीनी',
      'चावल (अक्षत): १ किलोग्राम',
      'सप्तधान्य (सात अनाज): ५० ग्राम',
      'काले तिल: २५० ग्राम',
      'शतावर: २५ ग्राम',
      'सर्वोषधि: २ पैकेट',
      'आम की लकड़ी (छोटी समिधा): २ किलोग्राम',
      'उपला / कण्डा: ५ नग',
      'गोघृत (गाय का शुद्ध घी): २५० ग्राम',
      'समिधा (पलाश की लकड़ी): १ नग',
      'कुशा: १० नग',
      'आम के पत्ते (पल्लव): ३ गुच्छे',
      'कलश (धातु या मिट्टी का): ३ नग',
      'दीपक (मिट्टी के): २५ नग',
      'काँसे की थाली: १ नग',
      'अष्टभाण्ड ताम्बे का पंचपात्र / लोटा: ८ नग',
      'पलाश के पत्तल: ५ नग',
      'पलाश के दोने: १ बण्डल',
      'लाल कपड़ा: १ मीटर',
      'पीला कपड़ा: ५ मीटर',
      'बटुक के लिए वस्त्र: लँगोटी, दो बड़े गमछे (बाँधने हेतु) एवं धोती आदि नवीन वस्त्र',
      'शृंगार एवं अन्य वस्तुएँ: छाता (१ नग), दर्पण (१ नग), कंघी (१ नग), काजल (१ डिब्बी), सुगन्धित तेल (१ शीशी)',
      'दातुन गूलर की ताजी: १ नग',
      'खड़ाऊँ: १ जोड़ी',
      'छड़ी / दण्ड: १ नग',
      'पलाशदण्ड: १ नग',
      'मृगचर्म (या कुशासन): १ नग',
      'मुंजमेखला (मूँज की रस्सी): १० हाथ',
      'पीढ़ा (पाटा / चौकी): १ नग',
      'स्लेट / पाटी / पटरी: १ नग',
      'खड्डी (खड़िया): १ नग',
      'ईंट (वेदी निर्माण हेतु): १५ नग',
      'बालू (रेत): १ बोरी'
    ]
  },
  'griha-pravesh': {
    id: 'griha-pravesh',
    num: '2',
    title: 'श्री गृहप्रवेश पूजन सामग्री',
    englishTitle: 'Shri Griha Pravesh Puja Samagri List',
    badge: '76+ आइटम्स (मात्रा सहित)',
    icon: '🏠',
    description: 'नवीन गृह प्रवेश, वास्तु शांति, कलश स्थापन एवं गृह हवन हेतु आवश्यक समस्त सामग्री।',
    items: [
      'वास्तु प्रतिमा — 1 Piece',
      'चावल (अक्षत) — 5 kg',
      'रोली (कुमकुम) — 10 gm',
      'मौली (कलावा) — 2 Piece',
      'अबीर गुलाल — 10, 10 gm',
      'सिंदूर — 1 Piece',
      'हल्दी — 10 gm',
      'हल्दी गाँठ — 50 gm',
      'पीला चंदन — 1 डिब्बी',
      'मधु (शहद) — 1 शीशी',
      'कपूर — 100 gm',
      'माचिस — 2 Piece',
      'धूपबत्ती — 1 पैकेट',
      'रुई — 1 पैकेट',
      'इत्र (सेंट) — 1 शीशी',
      'पीली सरसों — 10 gm',
      'गुड़ — 250 gm',
      'बड़ी सुपारी — 250 gm',
      'दोना — 2 पैकेट',
      'जनेऊ — 11 Piece',
      'केसर — 1 डिब्बी',
      'लौंग, इलाइची — 50 gm',
      'ड्राई फ्रूट्स (पंचमेवा) — 500 gm',
      'गंगा जल — 1 बोतल',
      'गुलाब जल — 1 बोतल',
      'गौमूत्र एवं गोबर',
      'कलश (तांबा या पीतल) — 1 Piece',
      'कलश (मिट्टी) — 5 Piece',
      'जटा वाला नारियल — 5 Piece',
      'सूखा नारियल (गोला) — 2 Piece',
      'मिट्टी दीपक — 11 छोटा',
      'मिट्टी दीपक — 2 बड़ा',
      'कपड़ा एक-एक मीटर (सफेद, लाल, पीला, काला, हरा)',
      'धोती, गमछा, साड़ी, श्रृंगार सेट — 2 Set',
      'पंचरत्न — 1 Piece',
      'सर्व औषधी — 1 पैकेट',
      'सप्तमृतिका — 1 पैकेट',
      'नवरत्न — 1 Piece',
      'चांदी का सिक्का — 1 Piece',
      'तिल (काला तिल) — 500 gm',
      'जौ — 100 gm',
      'धान का लावा — 100 gm',
      'सतवारी (शतावरी) — 50 gm',
      'जटामासी — 50 gm',
      'सर्वोषधि — 1 पैकेट',
      'कमलगट्टा — 11 दाने',
      'गूगल धूप — 50 gm',
      'शुद्ध देशी घी — 1 kg',
      'बड़ी लकड़ी (आम की समिधा) — 2 kg',
      'नवग्रह लकड़ी — 1 पैकेट',
      'रंग 4 कलर (लाल, पीला, काला, हरा)',
      'हवन कुंड / ईंट — 15 Piece',
      'हनुमान जी का झंडा — 1 Piece',
      'खुला फूल — 2 kg',
      'फूलमाला — 5 मीटर',
      'आम के पत्ते — 2 Piece',
      'केला के पत्ते — 7 Piece',
      'केले का पेड़ — 2 Piece',
      'पान के पत्ते — 51 Piece',
      'दूर्वा — 1 गड्डी',
      'तुलसी पत्र — 1 गड्डी',
      'विल्वपत्र (बेलपत्र) — 1 पैकेट',
      'नींबू — 4 Piece',
      'तुलसी का पौधा — 1 गमला',
      'नया झाड़ू — 1 Piece',
      'अन्नपूर्णा पूजन सामग्री (पांच प्रकार के अन्न)',
      'पंडित जी के लिए वस्त्र',
      'गणेश लक्ष्मी जी की मूर्ति',
      'फल — 5 प्रकार के',
      'मिठाई (प्रसाद)',
      'थाली, कटोरी, चम्मच (5+5) — पुराना भी चलेगा',
      'आसन (बेडशीट बैठने के लिए)',
      'भगोना (दूध उबालने के लिए) — 1 Piece',
      'गैस चूल्हा — 1 Set',
      'गाय का दूध (2 Litre) एवं दही',
      'लकड़ी की चौकी (पाटा)'
    ]
  },
  'rudrabhishek': {
    id: 'rudrabhishek',
    num: '3',
    title: 'रुद्राभिषेक पूजन सामग्री',
    englishTitle: 'Rudrabhishek Shiva Puja Samagri List',
    badge: '34 आइटम्स (मात्रा सहित)',
    icon: '🔱',
    description: 'भगवान शिव के महाभिषेक, शृंगार एवं रुद्र पाठ हेतु विशेष पूजन सामग्री सूची।',
    items: [
      'रोली',
      'मौली (कलावा)',
      'अबीर गुलाल',
      'पीली सरसों',
      'हल्दी पाउडर — 10 gm',
      'सुपारी — 5 Piece',
      'लौंग इलायची — 10 gm',
      'कपूर',
      'पीला चंदन',
      'शहद',
      'भस्म (विभूति)',
      'शक्कर (चीनी)',
      'शुद्ध देशी घी',
      'चावल (अक्षत)',
      'जनेऊ',
      'माचिस',
      'इत्र',
      'रुई (कपास)',
      'धूपबत्ती',
      'पंचमेवा',
      'दोना — 1 बण्डल',
      'गंगाजल (घर का / पवित्र जल)',
      'अंगवस्त्र',
      'शिव पार्वती जी हेतु वस्त्र (अलंकार सहित)',
      'पान के पत्ते — 11 Piece',
      'ताजा दही — आधा किलो (500 gm)',
      'गाय का दूध — 5 लीटर',
      'फूल — 500 gm (गुलाब एवं सफेद मिक्स)',
      'फूल का माला (गुलाब, बेला, गेंदा, मदार आदि)',
      'बेलपत्र (विल्वपत्र) — 120 पत्र',
      'कमल पुष्प — 11 पुष्प',
      'दूर्वा (दूब घास)',
      'मीठा फल — श्रद्धानुसार',
      'अभिषेक के लिए बड़ी परात'
    ]
  },
  'satyanarayan': {
    id: 'satyanarayan',
    num: '4',
    title: 'सत्यनारायण भगवान पूजन सामग्री',
    englishTitle: 'Shri Satyanarayan Bhagwan Katha Samagri List',
    badge: '48 आइटम्स (मात्रा सहित)',
    icon: '🪔',
    description: 'श्री सत्यनारायण व्रत कथा, पंजीरी प्रसाद, पंचामृत एवं हवन हेतु आवश्यक सम्पूर्ण सामग्री।',
    items: [
      'चावल (अक्षत) — 500 gm',
      'रोली (कुमकुम) — 10 gm',
      'मौली (कलावा) — 2 Piece',
      'अबीर गुलाल — 1 पैकेट',
      'सिंदूर (1 Piece) एवं हल्दी (10 gm)',
      'मधु (शहद) — 1 शीशी',
      'केसर — 1 डिब्बी',
      'कपूर — 10 gm',
      'माचिस — 2 Piece',
      'धूपबत्ती — 1 पैकेट',
      'रुई — 1 पैकेट',
      'इत्र (सेंट) — 1 शीशी',
      'पीली सरसों — 10 gm',
      'गुड़ — 250 gm',
      'बड़ी सुपारी — 50 gm',
      'दोना — 2 पैकेट',
      'जनेऊ — 5 Piece',
      'लौंग, इलाइची — 10 gm',
      'पंचमेवा — 50 gm',
      'गंगा जल — 1 बोतल',
      'कलश (मिट्टी) — 1 Piece',
      'जटा वाला नारियल — 1 Piece',
      'सूखा नारियल (गोला) — 1 Piece',
      'मिट्टी दीपक — 5 छोटा',
      'मिट्टी दीपक — 1 बड़ा',
      'कपड़ा (लाल / पीला) — 1 मीटर',
      'तिल (काला तिल) — 200 gm',
      'जौ — 50 gm',
      'सतवारी (शतावरी) — 10 gm',
      'जटामासी — 10 gm',
      'कमलगट्टा — 11 दाने',
      'गूगल धूप — 10 gm',
      'शुद्ध देशी घी — 1 kg',
      'बड़ी लकड़ी (आम की समिधा) — 2 kg',
      'नवग्रह लकड़ी — 1 पैकेट',
      'खुला फूल (गुलाब इत्यादि) — 500 gm',
      'फूलमाला — 5 Piece',
      'आम के पत्ते — 2 Piece (डाली)',
      'केला के पत्ते — 5 Piece',
      'पान के पत्ते — 11 Piece',
      'दूर्वा (दूब घास)',
      'थाली एवं कटोरी — 2 Set',
      'आसन (बैठने हेतु बेडशीट)',
      'गाय का दूध एवं ताजा दही',
      'फल एवं मिठाई (यथासम्भव)',
      'लकड़ी की चौकी (पाटा) — 1 Piece',
      'हवन कुण्ड — 1 Piece'
    ]
  }
}

export default function SamagriChecklistSection() {
  const [activeTab, setActiveTab] = useState('yagyopaveet')
  const [copied, setCopied] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [checkedMap, setCheckedMap] = useState({})

  const currentSamagri = poojaSamagriData[activeTab]

  const toggleCheck = (idx) => {
    const key = `${activeTab}-${idx}`
    setCheckedMap((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const resetChecks = () => {
    setCheckedMap({})
  }

  const filteredItems = currentSamagri.items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const checkedCount = currentSamagri.items.filter(
    (_, idx) => checkedMap[`${activeTab}-${idx}`]
  ).length

  const getFullChecklistText = () => {
    return `🕉️ *${currentSamagri.title}* (${currentSamagri.englishTitle})\nप्रमाणित: पं. सन्देश तिवारी (poojapandits.com)\n\n📋 *सामग्री सूची (${currentSamagri.items.length} वस्तुएँ):*\n${currentSamagri.items.map((it, idx) => `${idx + 1}. ${it}`).join('\n')}\n\n📞 पूजा बुकिंग एवं सम्पूर्ण सामग्री व्यवस्था हेतु संपर्क करें: +91 95807 58639\n🌐 वेबसाइट: https://www.poojapandits.com/puja-samagri-list`
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
    <section id="pooja-samagri" className="py-20 bg-gradient-to-b from-orange-50/60 via-white to-amber-50/40 border-t border-orange-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <ShoppingBag className="w-4 h-4 text-orange-600" />
            <span>Pooja Samagri List • पूजा सामग्री लिस्ट</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Pooja Samagri <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Checklist &amp; Guide</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            सभी प्रमुख वैदिक पूजाओं की प्रमाणिक सामग्री लिस्ट (मात्रा सहित)। अपनी पूजा का चयन करें, आवश्यक सामग्री चेक करें, डाउनलोड करें या सीधे WhatsApp पर शेयर करें।
          </p>
        </div>

        {/* Tab Selection: All 4 Pooja Names */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {Object.entries(poojaSamagriData).map(([key, data]) => {
              const isActive = activeTab === key
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key)
                    setSearchQuery('')
                  }}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl text-center transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-gradient-to-br from-orange-600 to-amber-600 text-white border-orange-600 shadow-lg shadow-orange-500/25 scale-[1.02]'
                      : 'bg-white text-gray-800 hover:bg-orange-50/70 border-orange-200/80 shadow-xs'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl mb-1.5">{data.icon}</span>
                  <span className="text-xs sm:text-sm font-extrabold leading-tight">
                    {data.title}
                  </span>
                  <span
                    className={`text-[10px] mt-1 px-2 py-0.5 rounded-full font-semibold ${
                      isActive ? 'bg-white/20 text-yellow-100' : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {data.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Samagri Main Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-orange-200/80 shadow-2xl p-5 sm:p-8">
          {/* Active Puja Title & Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-orange-100 gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentSamagri.icon}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {currentSamagri.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-orange-700 mt-0.5">
                {currentSamagri.englishTitle}
              </p>
              <p className="text-xs text-gray-500 mt-1 max-w-xl">
                {currentSamagri.description}
              </p>
            </div>

            {/* Quick Share and Copy Buttons */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition shadow-xs"
                title="Copy entire checklist to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'कॉपी हो गया!' : 'Copy List'}</span>
              </button>
              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold shadow-md shadow-green-600/20 transition"
                title="Share full list on WhatsApp"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp पर भेजें</span>
              </button>
            </div>
          </div>

          {/* Search & Check Status Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-orange-50/70 p-3 sm:p-4 rounded-2xl border border-orange-200/60">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="सामग्री खोजें (जैसे: रोली, घी, नारियल, हवन)..."
                className="w-full bg-white pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
              />
            </div>

            {/* Counter and Reset */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
              <span className="font-bold text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-orange-200 shadow-2xs">
                कुल: <strong className="text-orange-700">{filteredItems.length}</strong> सामग्री {checkedCount > 0 && `| ${checkedCount} चेक किए`}
              </span>
              {checkedCount > 0 && (
                <button
                  onClick={resetChecks}
                  className="inline-flex items-center gap-1 text-gray-500 hover:text-red-600 font-semibold transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>रीसेट</span>
                </button>
              )}
            </div>
          </div>

          {/* Checklist Items Grid */}
          <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 max-h-[560px] overflow-y-auto pr-1">
            {filteredItems.map((item, idx) => {
              const originalIndex = currentSamagri.items.indexOf(item)
              const isChecked = checkedMap[`${activeTab}-${originalIndex}`]
              return (
                <div
                  key={originalIndex}
                  onClick={() => toggleCheck(originalIndex)}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 text-gray-400'
                      : 'bg-white hover:bg-orange-50/40 border-orange-100 hover:border-orange-300 shadow-2xs'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!isChecked}
                    onChange={() => {}}
                    className="mt-0.5 w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-gray-300 cursor-pointer shrink-0 accent-orange-600"
                  />
                  <div className="flex-1 text-xs sm:text-sm leading-snug">
                    <span className={isChecked ? 'line-through text-gray-500' : 'text-gray-900 font-semibold'}>
                      {item}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-orange-600/70 bg-orange-50 px-1.5 py-0.5 rounded shrink-0">
                    #{originalIndex + 1}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Bottom Assistance Banner */}
          <div className="bg-gradient-to-r from-orange-100/90 via-amber-100/90 to-orange-100/90 rounded-2xl p-5 sm:p-6 border-2 border-orange-300/80 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3.5 text-center md:text-left">
                <div className="w-12 h-12 bg-white text-orange-600 rounded-xl flex items-center justify-center text-2xl shadow-sm shrink-0 mx-auto md:mx-0">
                  📦
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-gray-900">
                    सामग्री खरीदने का समय नहीं है?
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-0.5">
                    पंडित सन्देश तिवारी जी आपके पूजन के लिए 100% शुद्ध एवं प्रमाणिक सामग्री सीधे घर ला सकते हैं।
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-center">
                <a
                  href={`https://wa.me/919580758639?text=${encodeURIComponent(`Namaste Pandit Ji! Please arrange complete pure samagri for: ${currentSamagri.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>सामग्री मंगवाएं (WhatsApp)</span>
                </a>
                <a
                  href="tel:+919580758639"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-orange-300 text-orange-700 hover:bg-orange-50 text-xs sm:text-sm font-bold shadow-sm transition"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">कॉल करें</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
