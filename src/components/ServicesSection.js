import React from "react"

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sol: Uzman Görüşü Nedir ve Türk Hukuk Sisteminde Yeri */}
            <div className="flex-1 flex flex-col gap-8 justify-between">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Uzman Görüşü Nedir?
                </h3>
                <p className="text-xl text-gray-700 max-w-3xl">
                  Uzman görüşü, teknik veya özel bilgi gerektiren konularda mahkemeler, savcılıklar veya taraflarca alınan, alanında uzman kişiler tarafından hazırlanan bilimsel ve objektif değerlendirme raporudur.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Türk Hukuk Sisteminde Uzman Görüşünün Yeri
                </h3>
                <p className="text-lg text-gray-700 max-w-2xl">
                  Türk hukukunda, özellikle Hukuk Muhakemeleri Kanunu’nun 293. maddesi uyarınca, taraflar dava sürecinde kendi seçtikleri uzmanlardan görüş alabilir ve bu görüşleri mahkemeye sunabilirler. Uzman görüşü, bilirkişi raporundan farklı olarak tarafların delil olarak sunduğu, teknik ve bilimsel açıklamalar içeren bir değerlendirmedir. Mahkemeler, uzman görüşünü dikkate almak zorunda olmamakla birlikte, kararlarını gerekçelendirirken bu görüşlerden yararlanabilirler.
                </p>
              </div>
            </div>
            {/* Sağ: Uzman Görüşünün Faydaları */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center md:text-left">
                Uzman Görüşünün Faydaları Nelerdir?
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Teknik Bilgi Sağlar:</span> Mahkemeye veya taraflara, dava konusu teknik veya bilimsel konularda açıklık getirir.
                </li>
                <li>
                  <span className="font-semibold">Delil Niteliği:</span> Taraflarca sunulan uzman görüşleri, mahkemede delil olarak değerlendirilebilir.
                </li>
                <li>
                  <span className="font-semibold">Dava Sürecini Hızlandırır:</span> Teknik konularda hızlı ve güvenilir bilgi sunarak sürecin daha etkin ilerlemesini sağlar.
                </li>
                <li>
                  <span className="font-semibold">Objektif ve Bilimsel Yaklaşım:</span> Alanında uzman kişiler tarafından hazırlandığı için tarafsız ve bilimsel bir değerlendirme sunar.
                </li>
                <li>
                  <span className="font-semibold">Bilirkişi Raporuna Alternatif:</span> Mahkeme dışında da teknik görüş ihtiyacını karşılar, bilirkişi raporuna ek olarak kullanılabilir.
                </li>
              </ul>
            </div>
          </div>
          {/* CTA */}
          <div className="text-center mt-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Siz de uzman görüşü almak veya detaylı bilgi edinmek için bizimle iletişime geçebilirsiniz.
            </h4>
            <a
              href="/iletisim"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              İletişim Formu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
