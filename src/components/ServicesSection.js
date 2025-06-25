import { Link } from "react-router-dom"

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Trafik Kazası Analizi",
      description:
        "Trafik kazalarında kusur oranı tespiti, araç hasar değerlendirmesi ve kaza rekonstrüksiyonu hizmetleri.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ["Kaza Rekonstrüksiyonu", "Kusur Oranı Tespiti", "Araç Hasar Analizi", "Hız Hesaplaması"],
    },
    {
      id: 2,
      title: "Kusur Tespit Raporu",
      description: "Ürün ve hizmetlerdeki kusurların teknik analizi ve değerlendirmesi için detaylı raporlama hizmeti.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      features: ["Ürün Kusur Analizi", "Kalite Kontrol", "Teknik Değerlendirme", "Standart Uygunluk"],
    },
    {
      id: 3,
      title: "Aktüeryal Değerlendirme",
      description: "Sigorta matematik hesaplamaları, risk analizi ve hasar değerlendirme konularında uzman görüşü.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      features: ["Sigorta Matematik", "Risk Analizi", "Hasar Değerlendirme", "İstatistiksel Analiz"],
    },
    {
      id: 4,
      title: "Mühendislik Raporu",
      description: "İnşaat, makine ve diğer mühendislik alanlarında teknik değerlendirme ve analiz hizmetleri.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      features: ["Yapı Denetimi", "Statik Analiz", "Malzeme Analizi", "Proje Değerlendirme"],
    },
    {
      id: 5,
      title: "Tıbbi Değerlendirme",
      description: "Adli tıp, iş kazası değerlendirme ve engellilik oranı tespiti konularında uzman görüşü.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      features: ["Adli Tıp", "İş Kazası Değerlendirme", "Engellilik Oranı", "Sağlık Raporu"],
    },
    {
      id: 6,
      title: "Diğer Uzmanlık Alanları",
      description: "Özel durumlar ve diğer teknik konularda uzman uzman görüşü hizmetleri.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
      features: ["Özel Durumlar", "Teknik Analiz", "Danışmanlık", "Uzman Görüşü"],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Hizmet Alanlarımız</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geniş uzmanlık alanlarımızda deneyimli bilirkişilerden profesyonel rapor ve değerlendirme hizmetleri alın.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-4">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Hizmet Kapsamı:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link
                  to="/talep-formu"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                >
                  Rapor Talep Et
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Aradığınız uzmanlık alanını bulamadınız mı?</p>
          <Link
            to="/iletisim"
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors inline-block"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
