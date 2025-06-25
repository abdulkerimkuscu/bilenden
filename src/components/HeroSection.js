import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section className="bg-[#232323] text-[#4ecb8f] py-20"> {/* Soft siyah arka plan, soft yeşil yazı */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#4ecb8f]">
              Türkiye'nin En Güvenilir
              <span className="text-[#a7f3d0]"> Uzman Görüşü</span> Platformu
            </h1>
            <p className="text-xl mb-8 text-[#a7f3d0]">
              Trafik kazası analizleri, kusur tespit raporları ve aktüeryal değerlendirmeler konularında uzman
              bilirkişilerden profesyonel hizmet alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/talep-formu"
                className="bg-[#4ecb8f] text-[#232323] px-8 py-3 rounded-lg font-semibold hover:bg-[#38b27e] transition-colors text-center"
              >
                Uzman Görüşü Talep Et
              </Link>
              <Link
                to="/alanlarimiz"
                className="border-2 border-[#4ecb8f] text-[#4ecb8f] px-8 py-3 rounded-lg font-semibold hover:bg-[#4ecb8f] hover:text-[#232323] transition-colors text-center"
              >
                Alanlarımız
              </Link>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 text-[#f87171]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="font-semibold text-[#4ecb8f]">Hızlı Rapor</h3>
                  <p className="text-sm text-[#a7f3d0]">5-10 iş günü</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 text-[#f87171]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="font-semibold text-[#4ecb8f]">Güvenilir</h3>
                  <p className="text-sm text-[#a7f3d0]">Uzman kadro</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 text-[#f87171]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h3 className="font-semibold text-[#4ecb8f]">Deneyimli</h3>
                  <p className="text-sm text-[#a7f3d0]">15+ yıl tecrübe</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 text-[#f87171]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <h3 className="font-semibold text-[#4ecb8f]">7/24 Destek</h3>
                  <p className="text-sm text-[#a7f3d0]">Sürekli iletişim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
