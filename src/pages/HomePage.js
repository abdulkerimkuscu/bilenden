import React from "react"
import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import WhyChooseUs from "../components/WhyChooseUs"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />

      {/* Navigation Links */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="hover:underline px-4">Anasayfa</Link>
          <Link to="/hakkimizda" className="hover:underline px-4">Hakkımızda</Link>
          <Link to="/uzmanlar" className="hover:underline px-4">Uzmanlar</Link>
          <Link to="/iletisim" className="hover:underline px-4">İletişim</Link>
          <Link to="/talep-formu" className="hover:underline px-4">Talep Formu</Link>
        </div>
      </nav>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Uzman Bilirkişi Raporu İhtiyacınız mı Var?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Deneyimli uzmanlarımızdan profesyonel bilirkişi raporu alın. Hızlı, güvenilir ve detaylı analiz hizmeti.
          </p>
          <Link
            to="/talep-formu"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Hemen Talep Oluştur
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
