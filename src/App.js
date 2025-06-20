import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ExpertsPage from "./pages/ExpertsPage"
import ContactPage from "./pages/ContactPage"
import RequestFormPage from "./pages/RequestFormPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anasayfa" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/uzmanlar" element={<ExpertsPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/talep-formu" element={<RequestFormPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
