import React from "react"

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Hakkımızda</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bilenden olarak, Türkiye'de bilirkişi raporu ve uzman danışmanlık hizmetleri alanında öncü bir platform
            olmayı hedefliyoruz.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Misyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Adalet sisteminin vazgeçilmez bir parçası olan bilirkişilik hizmetlerini en yüksek kalite standartlarında
              sunarak, hukuki süreçlerde doğru ve objektif değerlendirmeler yapılmasına katkı sağlamak.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Türkiye'nin en güvenilir ve kapsamlı bilirkişi raporu platformu olarak, teknoloji ve uzmanlığı
              birleştirerek sektörde standartları belirleyen lider kuruluş olmak.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Hikayemiz</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4">
              Bilenden, hukuki süreçlerde ihtiyaç duyulan uzman görüşlerinin kaliteli ve hızlı bir şekilde temin
              edilmesi amacıyla kurulmuştur. Sektördeki deneyimli uzmanların bir araya gelmesiyle oluşan platformumuz,
              çeşitli alanlarda bilirkişilik hizmeti sunmaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Trafik kazası analizlerinden aktüeryal değerlendirmelere, kusur tespit raporlarından mühendislik
              analizlerine kadar geniş bir yelpazede hizmet veren uzman kadromuz, her projeye titizlikle yaklaşmaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Teknoloji altyapımız ve deneyimli uzman kadromuzla, müşterilerimize en kaliteli hizmeti sunmayı ve adalet
              sistemine katkı sağlamayı sürdürüyoruz.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenilirlik</h3>
              <p className="text-gray-600">
                Her raporda objektiflik ve doğruluk ilkesini benimser, güvenilir sonuçlar sunarız.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hızlı Hizmet</h3>
              <p className="text-gray-600">
                Zamanın kritik olduğu hukuki süreçlerde, hızlı ve kaliteli hizmet anlayışımızla yanınızdayız.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Uzmanlık</h3>
              <p className="text-gray-600">
                Alanında uzman, deneyimli ve sertifikalı bilirkişilerle çalışarak kaliteyi garanti ederiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
