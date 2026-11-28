import Link from 'next/link'
import { Phone, MessageCircle, Download, CheckSquare, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Complete Puja Samagri List with Quantity | सम्पूर्ण पूजन सामग्री लिस्ट',
  description: 'Download complete Hindu Vedic Puja Samagri list with exact quantities in Hindi & English (चावल, रोली, कलावा, गंगाजल, हवन सामग्री, घी). Book authentic samagri or pandit ji at doorstep in Lucknow & Delhi NCR.',
  keywords: 'pooja product list, pooja samagri list in hindi, complete puja samagri with quantity, pujan samagri list pdf, havan samagri list, griha pravesh puja samagri, satyanarayan katha samagri, pooja items list, pooja samagri shop near me, pooja ingredients list',
  openGraph: {
    title: 'Complete Vedic Puja Samagri List with Quantity | सम्पूर्ण पूजन सामग्री लिस्ट',
    description: 'Detailed list of 45+ essential Hindu Vedic puja items with exact grams & pieces. Curated by Pandit Sandesh Tiwari.',
    url: 'https://www.poojapandits.com/puja-samagri-list',
    images: [{ url: 'https://www.poojapandits.com/og-preview.jpg?v=3', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.poojapandits.com/puja-samagri-list'
  }
}

export const samagriItems = [
  { id: 1, hindi: 'चावल (अक्षत)', english: 'Rice (Akshat - Unbroken)', qty: '500 gm', category: 'अन्न एवं धान्य' },
  { id: 2, hindi: 'रोली (कुमकुम)', english: 'Roli / Kumkum', qty: '10 gm', category: 'तिलक एवं सुगंध' },
  { id: 3, hindi: 'मौली (कलावा)', english: 'Mauli / Sacred Kalawa Thread', qty: '2 Piece', category: 'वस्त्र एवं सूत्र' },
  { id: 4, hindi: 'अबीर-गुलाल', english: 'Abir & Gulal', qty: '1 पैकेट', category: 'तिलक एवं सुगंध' },
  { id: 5, hindi: 'सिन्दूर', english: 'Sindoor (Vermilion)', qty: '1 Piece', category: 'तिलक एवं सुगंध' },
  { id: 6, hindi: 'हल्दी पाउडर / गांठ', english: 'Turmeric Powder (Haldi)', qty: '10 gm', category: 'तिलक एवं सुगंध' },
  { id: 7, hindi: 'मधु (शहद)', english: 'Pure Honey', qty: '1 शीशी (Bottle)', category: 'पंचामृत एवं नैवेद्य' },
  { id: 8, hindi: 'केसर', english: 'Kesar (Saffron)', qty: '1 डिब्बी', category: 'तिलक एवं सुगंध' },
  { id: 9, hindi: 'कपूर', english: 'Camphor (Kapoor)', qty: '10 gm', category: 'हवन एवं आरती' },
  { id: 10, hindi: 'माचिस', english: 'Matchbox', qty: '2 Piece', category: 'हवन एवं आरती' },
  { id: 11, hindi: 'धूपबत्ती', english: 'Dhoopbatti (Incense Sticks)', qty: '1 पैकेट', category: 'हवन एवं आरती' },
  { id: 12, hindi: 'रुई (कपास)', english: 'Cotton for Wicks (Rui)', qty: '1 पैकेट', category: 'हवन एवं आरती' },
  { id: 13, hindi: 'इत्र (सेंट)', english: 'Pooja Attar (Fragrance)', qty: '1 शीशी', category: 'तिलक एवं सुगंध' },
  { id: 14, hindi: 'पीली सरसों', english: 'Yellow Mustard Seeds', qty: '10 gm', category: 'हवन एवं रक्षा' },
  { id: 15, hindi: 'गुड़', english: 'Pure Jaggery (Gud)', qty: '250 gm', category: 'पंचामृत एवं नैवेद्य' },
  { id: 16, hindi: 'बड़ी सुपारी', english: 'Supari (Betel Nuts)', qty: '50 gm', category: 'संकल्प एवं पूजा' },
  { id: 17, hindi: 'दोना', english: 'Paper / Leaf Bowls (Dona)', qty: '2 पैकेट', category: 'पात्र एवं व्यवस्था' },
  { id: 18, hindi: 'जनेऊ', english: 'Janeu (Sacred Thread)', qty: '5 Piece', category: 'वस्त्र एवं सूत्र' },
  { id: 19, hindi: 'लौंग एवं इलायची', english: 'Cloves (Laung) & Cardamom (Elaichi)', qty: '10 gm', category: 'संकल्प एवं पूजा' },
  { id: 20, hindi: 'पंचमेवा', english: 'Panchmeva (5 Dry Fruits Mix)', qty: '50 gm', category: 'पंचामृत एवं नैवेद्य' },
  { id: 21, hindi: 'गंगा जल', english: 'Ganga Jal (Holy Water)', qty: '1 बोतल', category: 'पवित्र जल' },
  { id: 22, hindi: 'कलश (मिट्टी/तांबा)', english: 'Kalash (Clay or Copper Pot)', qty: '1 Piece', category: 'पात्र एवं व्यवस्था' },
  { id: 23, hindi: 'जटा वाला नारियल', english: 'Jata Nariyal (Water Coconut)', qty: '1 Piece', category: 'संकल्प एवं पूजा' },
  { id: 24, hindi: 'सूखा नारियल (गोला)', english: 'Dry Coconut (Gola for Havan)', qty: '1 Piece', category: 'हवन एवं आरती' },
  { id: 25, hindi: 'मिट्टी के छोटे दीपक', english: 'Small Clay Diyas (Deepak)', qty: '5 Piece', category: 'हवन एवं आरती' },
  { id: 26, hindi: 'मिट्टी का बड़ा दीपक', english: 'Large Clay Diya (Maha Deep)', qty: '1 Piece', category: 'हवन एवं आरती' },
  { id: 27, hindi: 'कपड़ा (लाल अथवा पीला)', english: 'Altar Cloth (Red or Yellow)', qty: '1 मीटर', category: 'वस्त्र एवं सूत्र' },
  { id: 28, hindi: 'तिल (काला तिल)', english: 'Sesame Seeds (Til)', qty: '200 gm', category: 'हवन एवं रक्षा' },
  { id: 29, hindi: 'जौ (यव)', english: 'Barley Seeds (Jau)', qty: '50 gm', category: 'हवन एवं रक्षा' },
  { id: 30, hindi: 'सतवारी (शतावरी)', english: 'Shatavari Ayurvedic Herb', qty: '10 gm', category: 'औषधि एवं हवन' },
  { id: 31, hindi: 'जटामासी', english: 'Jatamansi Sacred Herb', qty: '10 gm', category: 'औषधि एवं हवन' },
  { id: 32, hindi: 'कमलगट्टा', english: 'Kamalgatta (Lotus Seeds)', qty: '11 दाने', category: 'लक्ष्मी कारक' },
  { id: 33, hindi: 'गूगल (धूप)', english: 'Guggul Pure Resin', qty: '10 gm', category: 'हवन एवं आरती' },
  { id: 34, hindi: 'शुद्ध देशी गाय का घी', english: 'Pure Cow Desi Ghee', qty: '1 kg', category: 'हवन एवं आरती' },
  { id: 35, hindi: 'बड़ी लकड़ी (आम की समिधा)', english: 'Dry Mango Wood for Havan', qty: '2 kg', category: 'हवन एवं आरती' },
  { id: 36, hindi: 'नवग्रह लकड़ी', english: 'Navgraha Samidha Wood Sticks', qty: '1 पैकेट', category: 'हवन एवं रक्षा' },
  { id: 37, hindi: 'खुले फूल (गुलाब/गेंदा)', english: 'Fresh Loose Flowers (Rose, Marigold)', qty: '500 gm', category: 'पुष्प एवं पत्र' },
  { id: 38, hindi: 'फूलमाला', english: 'Flower Garlands (Phool Mala)', qty: '5 Piece', category: 'पुष्प एवं पत्र' },
  { id: 39, hindi: 'आम के पत्ते', english: 'Mango Leaves (Aam Patta)', qty: '2 डाली / टहनी', category: 'पुष्प एवं पत्र' },
  { id: 40, hindi: 'केले के पत्ते', english: 'Banana Leaves (Kela Patta)', qty: '5 Piece', category: 'पुष्प एवं पत्र' },
  { id: 41, hindi: 'पान के पत्ते', english: 'Fresh Betel Leaves (Paan Patta)', qty: '11 Piece', category: 'पुष्प एवं पत्र' },
  { id: 42, hindi: 'दूर्वा (दूब घास)', english: 'Durva Grass (Sacred Cynodon)', qty: '1 गड्डी', category: 'पुष्प एवं पत्र' },
  { id: 43, hindi: 'थाली एवं कटोरी', english: 'Steel / Brass Thali & Bowls', qty: '2 Set', category: 'पात्र एवं व्यवस्था' },
  { id: 44, hindi: 'आसन (बैठने हेतु बेडशीट)', english: 'Aasan / Clean Bed sheet for sitting', qty: '2-3 Piece', category: 'पात्र एवं व्यवस्था' },
  { id: 45, hindi: 'ताजा गाय का दूध एवं दही', english: 'Fresh Milk & Curd', qty: 'यथाशक्ति (250 ml)', category: 'पंचामृत एवं नैवेद्य' },
  { id: 46, hindi: 'ऋतुफल एवं मिष्ठान्न (प्रसाद)', english: 'Seasonal Fruits & Sweets (Bhog)', qty: 'यथासम्भव', category: 'पंचामृत एवं नैवेद्य' },
  { id: 47, hindi: 'लकड़ी की चौकी (पाटा)', english: 'Wooden Stool / Pooja Chowki', qty: '1 Piece', category: 'पात्र एवं व्यवस्था' },
  { id: 48, hindi: 'हवन कुण्ड', english: 'Havan Kund (Iron/Copper)', qty: '1 Piece', category: 'हवन एवं आरती' },
]

export default function PujaSamagriListPage() {
  const whatsappBookingMsg = encodeURIComponent(
    '🙏 Jai Shree Ram! I am viewing your complete Puja Samagri List. Please arrange complete samagri or guide me on booking Pandit Ji.'
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Complete Hindu Vedic Puja Samagri List with Quantity',
    description: 'Comprehensive list of essential items, herbs, and ingredients required for Hindu Vedic puja, Hawan, and rituals.',
    url: 'https://www.poojapandits.com/puja-samagri-list',
    numberOfItems: samagriItems.length,
    itemListElement: samagriItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `${item.hindi} (${item.english}) - ${item.qty}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-amber-50/30">
        {/* Navigation Breadcrumb / Header */}
        <header className="bg-white border-b border-orange-100 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-lg">
                🕉️
              </div>
              <div>
                <span className="font-extrabold text-orange-700 text-lg leading-tight block">Pandit Ji Services</span>
                <span className="text-[11px] text-gray-500 leading-none">सम्पूर्ण वैदिक पूजन एवं सामग्री</span>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <a
                href="tel:+919580758639"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-600 text-orange-700 font-bold text-xs hover:bg-orange-50"
              >
                <Phone className="w-3.5 h-3.5" /> +91 95807 58639
              </a>
              <a
                href={`https://wa.me/919580758639?text=${whatsappBookingMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Help
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-amber-300" /> वैदिक पूजन एवं हवन सामग्री लिस्ट (48+ Items)
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Complete Puja Samagri List with Quantity
            </h1>
            <p className="text-lg md:text-2xl text-orange-100 font-medium mt-2">
              सम्पूर्ण वैदिक पूजा सामग्री लिस्ट (मात्रा सहित) — गृह प्रवेश, हवन, सत्यनारायण कथा एवं समस्त मांगलिक अनुष्ठान
            </p>
            <p className="max-w-3xl mx-auto text-xs md:text-sm text-orange-100 mt-4 leading-relaxed">
              यह सूची अयोध्या धाम परंपरा के वरिष्ठ वैदिक पुरोहित <strong>पंडित सन्देश तिवारी जी</strong> (वेद विभूषण अलंकृत) द्वारा प्रमाणित है। किसी भी सामान्य या विशिष्ट वैदिक पूजन एवं हवन के लिए आवश्यक समस्त सामग्रियों की सम्पूर्ण सूची नीचे दी गई है।
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/919580758639?text=${encodeURIComponent('🙏 Namaste Pandit Ji, please arrange full pure samagri package for my puja at home.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-800 hover:bg-orange-50 font-bold px-6 py-3.5 rounded-xl shadow-lg transition text-sm"
              >
                <ShoppingBag className="w-4 h-4 text-orange-600" />
                <span>पूरी सामग्री पंडित जी द्वारा घर मंगवाएं (Doorstep Samagri)</span>
              </a>
              <a
                href="#items-table"
                className="inline-flex items-center gap-2 bg-orange-950/40 hover:bg-orange-950/60 text-white border border-white/30 font-bold px-6 py-3.5 rounded-xl transition text-sm"
              >
                <CheckSquare className="w-4 h-4" />
                <span>सामग्री लिस्ट देखें (View Checklist)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Why this list is special / SEO quick summary */}
        <section className="py-8 bg-white border-b border-orange-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <div className="text-2xl font-black text-orange-600">48+</div>
                <div className="text-xs text-gray-700 font-bold mt-1">शुद्ध वैदिक वस्तुएं</div>
                <div className="text-[10px] text-gray-500">All Vedic Essentials</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <div className="text-2xl font-black text-orange-600">100%</div>
                <div className="text-xs text-gray-700 font-bold mt-1">सटीक मात्रा (Quantities)</div>
                <div className="text-[10px] text-gray-500">Accurate Grams & Pieces</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <div className="text-2xl font-black text-orange-600">Doorstep</div>
                <div className="text-xs text-gray-700 font-bold mt-1">सामग्री होम डिलीवरी</div>
                <div className="text-[10px] text-gray-500">Lucknow & Delhi NCR</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <div className="text-2xl font-black text-orange-600">15+ Yrs</div>
                <div className="text-xs text-gray-700 font-bold mt-1">वैदिक अनुभव</div>
                <div className="text-[10px] text-gray-500">Ayodhya Math Tradition</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Table / Product List */}
        <section id="items-table" className="py-12 container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-200 overflow-hidden">
            {/* Table Header Action Bar */}
            <div className="p-6 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-b border-orange-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                  सम्पूर्ण पूजा सामग्री तालिका (Pooja Item Quantity Table)
                </h2>
                <p className="text-xs text-gray-600 mt-0.5">
                  गृह प्रवेश, सत्यनारायण कथा, रुद्राभिषेक, विवाह, नवग्रह शांति एवं दैनिक महायज्ञ हेतु
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`https://wa.me/919580758639?text=${encodeURIComponent('🙏 Namaste Pandit Ji, please send me the Puja Samagri List in WhatsApp.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp पर लिस्ट मंगवाएं</span>
                </a>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-orange-600 text-white text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold text-center w-12">क्र.</th>
                    <th className="py-3.5 px-4 font-bold">सामग्री का नाम (हिंदी)</th>
                    <th className="py-3.5 px-4 font-bold">Item Name (English)</th>
                    <th className="py-3.5 px-4 font-bold text-orange-100">मात्रा (Quantity)</th>
                    <th className="py-3.5 px-4 font-bold hidden md:table-cell">श्रेणी (Category)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {samagriItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? 'bg-white hover:bg-orange-50/60' : 'bg-orange-50/30 hover:bg-orange-50/60'}
                    >
                      <td className="py-3 px-4 text-center text-xs font-bold text-gray-400">
                        {item.id}
                      </td>
                      <td className="py-3 px-4 font-bold text-gray-900">
                        {item.hindi}
                      </td>
                      <td className="py-3 px-4 text-gray-700 font-medium">
                        {item.english}
                      </td>
                      <td className="py-3 px-4 font-extrabold text-orange-700 bg-orange-100/40 rounded-lg inline-block my-1 text-xs">
                        {item.qty}
                      </td>
                      <td className="py-3 px-4 text-xs text-gray-500 hidden md:table-cell">
                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                          {item.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Callout in Table */}
            <div className="p-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border-t border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">सामग्री ढूंढने का समय नहीं है?</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    पंडित सन्देश तिवारी जी स्वयं सम्पूर्ण 100% शुद्ध सामग्री साथ लेकर आपके घर पधारेंगे।
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/919580758639?text=${encodeURIComponent('🙏 Namaste Pandit Ji, please arrange complete samagri package for my upcoming puja.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md flex-shrink-0 flex items-center gap-1.5 transition"
              >
                <span>Complete Samagri Package Book करें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* SEO FAQ Section for "pooja product list / pooja samagri" searches */}
        <section className="py-12 bg-orange-50/50 border-t border-orange-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Frequently Asked Questions — पूजा सामग्री संबंधी प्रश्न
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Common questions devotees ask about Hindu Puja materials and items
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-sm">
                <h4 className="font-bold text-gray-900 text-sm md:text-base">
                  Q: पूजा में अक्षत (चावल) कैसा होना चाहिए?
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  अक्षत का अर्थ है &ldquo;जो खंडित न हो&rdquo;। पूजा में केवल अखण्ड, बिना टूटे हुए साफ चावल का उपयोग किया जाता है। टूटे हुए चावल को पूजा में निषेध माना गया है।
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-sm">
                <h4 className="font-bold text-gray-900 text-sm md:text-base">
                  Q: क्या पंडित जी द्वारा पूरी सामग्री का प्रबंध कराया जा सकता है?
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  हाँ, पंडित सन्देश तिवारी जी के पास &ldquo;Complete Puja with 100% Samagri Included&rdquo; पैकेज उपलब्ध है। आपको बाजार से कुछ भी लाने की आवश्यकता नहीं होती, पंडित जी स्वयं गाय का शुद्ध देशी घी, आम की सूखी लकड़ी, हवन सामग्री, रोली, कलावा, धूप, नारियल सब कुछ लेकर पहुंचते हैं।
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-sm">
                <h4 className="font-bold text-gray-900 text-sm md:text-base">
                  Q: हवन के लिए किस लकड़ी (समिधा) का उपयोग सबसे शुभ होता है?
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  वैदिक शास्त्रों के अनुसार हवन हेतु आम की लकड़ी (आम्र समिधा), ढाक/पलाश, तथा नवग्रह की विशेष 9 लकड़ियों का उपयोग सर्वश्रेष्ठ एवं नकारात्मक ऊर्जा निवारक माना जाता है।
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/#booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:from-orange-700 hover:to-red-700 transition">
                <span>Book Pandit Ji &amp; Samagri Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
