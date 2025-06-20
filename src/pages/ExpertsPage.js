

import React, { useState } from "react"

const ExpertsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Tüm Uzmanlar" },
    { id: "traffic", name: "Trafik Kazası" },
    { id: "actuarial", name: "Aktüerya" },
    { id: "medical", name: "Tıp" },
    { id: "engineering", name: "Mühendislik" },
    { id: "defect", name: "Kusur Tespiti" },
  ]

  const experts = [
    {
      id: 1,
      name: "Dr. Mehmet Yılmaz",
      category: "traffic",
      title: "Trafik Kazası Uzmanı",
      experience: "15 yıl",
      education: "İTÜ Makine Mühendisliği",
      specialties: ["Trafik Kazası Analizi", "Araç Hasar Tespiti", "Kaza Rekonstrüksiyonu"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Prof. Dr. Ayşe Kaya",
      category: "actuarial",
      title: "Aktüerya Uzmanı",
      experience: "20 yıl",
      education: "Hacettepe Üniversitesi İstatistik",
      specialties: ["Sigorta Matematik", "Risk Analizi", "Hasar Değerlendirme"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Dr. Ali Demir",
      category: "medical",
      title: "Tıp Uzmanı",
      experience: "18 yıl",
      education: "İstanbul Üniversitesi Tıp Fakültesi",
      specialties: ["Adli Tıp", "İş Kazası Değerlendirme", "Engellilik Oranı Tespiti"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Mühendis Fatma Özkan",
      category: "engineering",
      title: "İnşaat Mühendisi",
      experience: "12 yıl",
      education: "ODTÜ İnşaat Mühendisliği",
      specialties: ["Yapı Denetimi", "Hasar Tespiti", "Statik Analiz"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Uzman Hasan Çelik",
      category: "defect",
      title: "Kusur Tespit Uzmanı",
      experience: "10 yıl",
      education: "Yıldız Teknik Üniversitesi",
      specialties: ["Ürün Kusur Analizi", "Kalite Kontrol", "Teknik Değerlendirme"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Dr. Zeynep Arslan",
      category: "traffic",
      title: "Otomotiv Uzmanı",
      experience: "14 yıl",
      education: "Boğaziçi Üniversitesi",
      specialties: ["Araç Teknik Analizi", "Motor Hasar Tespiti", "Elektronik Sistem Analizi"],
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const filteredExperts =
    selectedCategory === "all" ? experts : experts.filter((expert) => expert.category === selectedCategory)

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Uzman Kadromuz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alanında uzman, deneyimli ve sertifikalı bilirkişilerden oluşan kadromuzla size en kaliteli hizmeti
            sunuyoruz.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{expert.name}</h3>
                    <p className="text-blue-600 font-medium">{expert.title}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{expert.experience} deneyim</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="text-sm">{expert.education}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Uzmanlık Alanları:</h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.specialties.map((specialty, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Profili İncele
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Uzmanlarımızdan Bilirkişi Raporu Almak İster misiniz?
          </h2>
          <p className="text-gray-600 mb-6">
            Deneyimli uzman kadromuzdan ihtiyacınıza uygun bilirkişi raporu talebinde bulunun.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Talep Formu Oluştur
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExpertsPage
