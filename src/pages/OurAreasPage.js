import React from "react"

const fields = [
  {
    title: "Trafik Kazaları ve Kusur Oranı Tespiti",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Araç hız analizi</li>
          <li>Çarpışma noktası tespiti</li>
          <li>Teknik kusur belirlemesi</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> Makine mühendisleri, trafik bilirkişileri, adli trafik uzmanları
      </>
    ),
  },
  {
    title: "İşçilik Alacakları ve SGK İncelemeleri",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Kıdem tazminatı</li>
          <li>Fazla mesai</li>
          <li>Yıllık izin</li>
          <li>Prim tespiti</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> Serbest muhasebeci mali müşavir (SMMM), SGK uzmanı
      </>
    ),
  },
  {
    title: "Taşınmaz Değerleme ve Kamulaştırma",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Arsa</li>
          <li>Tarla</li>
          <li>Konut gibi gayrimenkullerin piyasa değeri</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> Gayrimenkul değerleme uzmanı, şehir plancısı, harita mühendisi
      </>
    ),
  },
  {
    title: "Miras ve Taksim Uyuşmazlıkları",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Veraset ve intikal</li>
          <li>Tereke paylaşımı</li>
          <li>Taşınmazın bölünmesi</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> Harita mühendisi, ziraat mühendisi, hukukçu bilirkişiler
      </>
    ),
  },
  {
    title: "Adli Muhasebe ve Defter İncelemeleri",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Ticari defterlerin usule uygunluğu</li>
          <li>Şirket ortaklık uyuşmazlıkları</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> YMM, SMMM, denetçiler
      </>
    ),
  },
  {
    title: "İnşaat ve İmar Uyuşmazlıkları",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Hatalı inşaat</li>
          <li>Ruhsatsız yapı</li>
          <li>Yapı denetimi kusurları</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> İnşaat mühendisi, mimar, yapı denetim uzmanı
      </>
    ),
  },
  {
    title: "Elektrik, Enerji ve Yangın İncelemeleri",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Elektrik arızası kaynaklı zarar</li>
          <li>Trafo yangınları</li>
          <li>Kaçak kullanım tespiti</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> Elektrik mühendisleri
      </>
    ),
  },
  {
    title: "İşyeri Kazaları ve Meslek Hastalıkları",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>İş güvenliği ihlalleri</li>
          <li>Kaza nedenlerinin belirlenmesi</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> İş sağlığı ve güvenliği uzmanları, işyeri hekimleri
      </>
    ),
  },
  {
    title: "Tarım, Ürün Verimliliği ve Doğal Afet Tespitleri",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Ürün zararı</li>
          <li>Tarımsal üretim kaybı</li>
          <li>Afet hasar tespiti</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> Ziraat mühendisleri
      </>
    ),
  },
  {
    title: "Ses, Görüntü, Yazı ve Dijital Belge İncelemeleri (Bilişim)",
    description: (
      <>
        <ul className="list-disc list-inside mb-2">
          <li>Ses kayıtlarının doğruluğu</li>
          <li>Belge sahteciliği</li>
          <li>Dijital izlerin analizi</li>
        </ul>
        <br />
        <span className="font-semibold">Başvuru yapılan bilirkişiler:</span> Adli bilişim uzmanları, grafoloji uzmanları, yazılım mühendisleri
      </>
    ),
  },
]

const OurAreasPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Uzmanlık Alanlarımız
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bilirkişilik hizmetlerimiz kapsamında uzmanlaştığımız başlıca alanlar
            hakkında detaylı bilgi edinin.
          </p>
        </div>

        {/* Our Fields Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Alanlarımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fields.map((field, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {field.title}
                </h3>
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
            Alanlarımızla ilgili detaylı bilgi veya bilirkişi raporu talebi için
            bizimle iletişime geçebilirsiniz.
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