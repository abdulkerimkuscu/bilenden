"use client"

import React, { useState } from "react"

const RequestFormPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    name: "",
    email: "",
    phone: "",
    company: "",

    // Step 2: Request Details
    reportType: "",
    urgency: "",
    description: "",

    // Step 3: Case Details
    caseDate: "",
    caseLocation: "",
    caseDetails: "",

    // Step 4: Documents
    documents: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFormData((prev) => ({
      ...prev,
      documents: files,
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kişisel Bilgiler</h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Ad Soyad *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Şirket/Kurum
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Talep Detayları</h2>

            <div>
              <label htmlFor="reportType" className="block text-sm font-medium text-gray-700 mb-2">
                Rapor Türü *
              </label>
              <select
                id="reportType"
                name="reportType"
                value={formData.reportType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Rapor türü seçiniz</option>
                <option value="traffic">Trafik Kazası Analizi</option>
                <option value="defect">Kusur Tespit Raporu</option>
                <option value="actuarial">Aktüeryal Değerlendirme</option>
                <option value="medical">Tıbbi Değerlendirme</option>
                <option value="engineering">Mühendislik Raporu</option>
                <option value="construction">İnşaat Raporu</option>
                <option value="other">Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                Aciliyet Durumu *
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Aciliyet durumu seçiniz</option>
                <option value="normal">Normal (10-15 iş günü)</option>
                <option value="urgent">Acil (5-7 iş günü)</option>
                <option value="very-urgent">Çok Acil (2-3 iş günü)</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Genel Açıklama *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Rapor ihtiyacınızı kısaca açıklayın..."
              ></textarea>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Olay Detayları</h2>

            <div>
              <label htmlFor="caseDate" className="block text-sm font-medium text-gray-700 mb-2">
                Olay Tarihi
              </label>
              <input
                type="date"
                id="caseDate"
                name="caseDate"
                value={formData.caseDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="caseLocation" className="block text-sm font-medium text-gray-700 mb-2">
                Olay Yeri
              </label>
              <input
                type="text"
                id="caseLocation"
                name="caseLocation"
                value={formData.caseLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="İl, ilçe ve detaylı adres bilgisi"
              />
            </div>

            <div>
              <label htmlFor="caseDetails" className="block text-sm font-medium text-gray-700 mb-2">
                Olay Detayları *
              </label>
              <textarea
                id="caseDetails"
                name="caseDetails"
                value={formData.caseDetails}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Olayı detaylı olarak anlatın. Ne oldu, nasıl oldu, kimler dahil, hangi hasarlar oluştu vb."
              ></textarea>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Belgeler ve Dosyalar</h2>

            <div>
              <label htmlFor="documents" className="block text-sm font-medium text-gray-700 mb-2">
                İlgili Belgeler
              </label>
              <input
                type="file"
                id="documents"
                name="documents"
                onChange={handleFileChange}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-2">
                Fotoğraflar, belgeler, mevcut raporlar vb. (PDF, DOC, JPG, PNG formatları kabul edilir)
              </p>
            </div>

            {formData.documents.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Seçilen Dosyalar:</h3>
                <ul className="space-y-1">
                  {formData.documents.map((file, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Talep Özeti</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Ad Soyad:</span> {formData.name}
                </p>
                <p>
                  <span className="font-medium">E-posta:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Telefon:</span> {formData.phone}
                </p>
                <p>
                  <span className="font-medium">Rapor Türü:</span> {formData.reportType}
                </p>
                <p>
                  <span className="font-medium">Aciliyet:</span> {formData.urgency}
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Bilirkişi Raporu Talep Formu</h1>
          <p className="text-xl text-gray-600">Adım adım formu doldurarak bilirkişi raporu talebinizi oluşturun.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Kişisel Bilgiler</span>
            <span>Talep Detayları</span>
            <span>Olay Detayları</span>
            <span>Belgeler</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg ${
                  currentStep === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
              >
                Önceki
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Sonraki
                </button>
              ) : (
                <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Talebi Gönder
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Yardıma mı ihtiyacınız var?</h3>
          <p className="text-gray-600 mb-4">
            Form doldururken herhangi bir sorunla karşılaşırsanız veya özel durumunuz varsa, bizimle doğrudan iletişime
            geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+902121234567"
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Telefon ile Ara
            </a>
            <a
              href="mailto:info@bilenden.com"
              className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              E-posta Gönder
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestFormPage
