import React from "react"

const fields = [
  {
    title: "Trafik Kazası Kusur Analizi",
    description:
      "Trafik kazalarında kusur oranlarının belirlenmesi, olayın oluş şekli, tarafların hareketleri ve mevcut delillerin teknik olarak değerlendirilmesiyle yapılır. Bu analiz, adli süreçlerde adil kararların alınmasına yardımcı olur.",
  },
  {
    title: "Aktüerya Nedir?",
    description:
      "Aktüerya, sigorta, emeklilik ve finansal risklerin matematiksel ve istatistiksel yöntemlerle analiz edilmesidir. Aktüerler, tazminat hesaplamaları, yaşam beklentisi ve risk yönetimi gibi konularda uzmanlaşır.",
  },
  {
    title: "Tıbbi Değerlendirme ve Raporlama",
    description:
      "Tıbbi bilirkişilik, iş kazası, trafik kazası veya diğer olaylarda oluşan yaralanmaların, engellilik oranlarının ve tedavi süreçlerinin bilimsel olarak değerlendirilmesini kapsar.",
  },
  {
    title: "Mühendislik ve Hasar Tespiti",
    description:
      "Mühendislik alanında bilirkişilik, yapıların, makinelerin veya altyapıların hasar tespiti, teknik analiz ve uygunluk değerlendirmesi gibi konuları içerir.",
  },
  {
    title: "Kusur Tespiti ve Ürün Analizi",
    description:
      "Ürün veya hizmetlerde meydana gelen kusurların nedenlerinin araştırılması, kalite kontrol süreçlerinin incelenmesi ve teknik rapor hazırlanması bilirkişilik kapsamında sunulan hizmetlerdendir.",
  },
]

const OurAreasPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Uzmanlık Alanlarımız</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bilirkişilik hizmetlerimiz kapsamında uzmanlaştığımız başlıca alanlar hakkında detaylı bilgi edinin.
          </p>
        </div>

        {/* Our Fields Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Alanlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fields.map((field, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{field.title}</h3>
                <p className="text-gray-700">{field.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Uzmanlık Alanlarımız Hakkında Daha Fazla Bilgi Almak İster misiniz?
          </h2>
          <p className="text-gray-600 mb-6">
            Alanlarımızla ilgili detaylı bilgi veya bilirkişi raporu talebi için bizimle iletişime geçebilirsiniz.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            İletişim Formu
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurAreasPage