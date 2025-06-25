import React from "react"
import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import WhyChooseUs from "../components/WhyChooseUs"

const HomePage = () => {
  return (
    <div className="bg-[#232323] text-[#4ecb8f] min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="bg-[#232323] text-[#4ecb8f] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Uzman Bilirkişi Raporu İhtiyacınız mı Var?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Deneyimli uzmanlarımızdan profesyonel bilirkişi raporu alın. Hızlı, güvenilir ve detaylı analiz hizmeti.
          </p>
          <Link
            to="/talep-formu"
            className="bg-[#4ecb8f] text-[#232323] px-8 py-3 rounded-lg font-semibold hover:bg-[#38b27e] transition-colors inline-block"
          >
            Hemen Talep Oluştur
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
