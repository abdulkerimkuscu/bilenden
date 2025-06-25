import bilendenLogo from "../assets/logo2.png"
//import bilendenLogo from "../assets/bilenden-logo.png" // yeni logonuzu assets klasörüne ekleyin
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path || (path === "/" && location.pathname === "/anasayfa")
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#232323]/90 backdrop-blur-md shadow-md"
          : "bg-[#232323] shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 md:py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={bilendenLogo}
              alt="Bilenden Logo"
              className="h-12 w-[180px] transition-all duration-300"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/anasayfa"
              className={`transition-colors ${
                isActive("/anasayfa") || isActive("/")
                  ? "text-[#f87171] font-semibold"
                  : "text-[#4ecb8f] hover:text-[#f87171]"
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/alanlarimiz"
              className={`transition-colors ${
                isActive("/alanlarimiz")
                  ? "text-[#f87171] font-semibold"
                  : "text-[#4ecb8f] hover:text-[#f87171]"
              }`}
            >
              Alanlarımız
            </Link>
            <Link
              to="/hakkimizda"
              className={`transition-colors ${
                isActive("/hakkimizda")
                  ? "text-[#f87171] font-semibold"
                  : "text-[#4ecb8f] hover:text-[#f87171]"
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              to="/iletisim"
              className={`transition-colors ${
                isActive("/iletisim")
                  ? "text-[#f87171] font-semibold"
                  : "text-[#4ecb8f] hover:text-[#f87171]"
              }`}
            >
              İletişim
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            to="/talep-formu"
            className="hidden md:block bg-[#4ecb8f] text-[#232323] px-6 py-2 rounded-lg hover:bg-[#38b27e] transition-colors font-semibold"
          >
            Uzman Görüşü Talep Et
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="#4ecb8f" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/anasayfa"
                className={`py-2 transition-colors ${
                  isActive("/anasayfa") || isActive("/")
                    ? "text-[#f87171] font-semibold"
                    : "text-[#4ecb8f] hover:text-[#f87171]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/alanlarimiz"
                className={`py-2 transition-colors ${
                  isActive("/alanlarimiz")
                    ? "text-[#f87171] font-semibold"
                    : "text-[#4ecb8f] hover:text-[#f87171]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Alanlarımız
              </Link>
              <Link
                to="/hakkimizda"
                className={`py-2 transition-colors ${
                  isActive("/hakkimizda")
                    ? "text-[#f87171] font-semibold"
                    : "text-[#4ecb8f] hover:text-[#f87171]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                to="/iletisim"
                className={`py-2 transition-colors ${
                  isActive("/iletisim")
                    ? "text-[#f87171] font-semibold"
                    : "text-[#4ecb8f] hover:text-[#f87171]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link
                to="/talep-formu"
                className="py-2 bg-[#4ecb8f] text-[#232323] px-4 rounded-lg text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Uzman Görüşü Talep Et
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
