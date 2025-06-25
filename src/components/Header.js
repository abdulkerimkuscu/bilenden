import logo from "../assets/logo.png"
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
          ? "bg-white/50 backdrop-blur-md shadow-md" // transparanlık %50'ye çıkarıldı
          : "bg-white shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 md:py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Bilenden Logo"
              className="h-10 w-auto md:h-12 transition-all duration-300"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/anasayfa"
              className={`hover:text-blue-600 transition-colors ${isActive("/anasayfa") || isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700"}`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/alanlarimiz"
              className={`hover:text-blue-600 transition-colors ${isActive("/alanlarimiz") ? "text-blue-600 font-semibold" : "text-gray-700"}`}
            >
              Alanlarımız
            </Link>
            <Link
              to="/hakkimizda"
              className={`hover:text-blue-600 transition-colors ${isActive("/hakkimizda") ? "text-blue-600 font-semibold" : "text-gray-700"}`}
            >
              Hakkımızda
            </Link>
            <Link
              to="/iletisim"
              className={`hover:text-blue-600 transition-colors ${isActive("/iletisim") ? "text-blue-600 font-semibold" : "text-gray-700"}`}
            >
              İletişim
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            to="/talep-formu"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Uzman Görüşü Talep Et
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="py-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/alanlarimiz"
                className="py-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Alanlarımız
              </Link>
              <Link
                to="/hakkimizda"
                className="py-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                to="/iletisim"
                className="py-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link
                to="/talep-formu"
                className="py-2 bg-blue-600 text-white px-4 rounded-lg text-center"
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
