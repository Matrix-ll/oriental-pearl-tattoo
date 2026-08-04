import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import CategoryPage from '@/pages/CategoryPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import PricingPage from '@/pages/PricingPage'
import BookingPage from '@/pages/BookingPage'
import FAQPage from '@/pages/FAQPage'
import StylesPage from '@/pages/StylesPage'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsPage from '@/pages/TermsPage'
import BookingPolicy from '@/pages/BookingPolicy'
import RefundPolicy from '@/pages/RefundPolicy'
import HealthPolicy from '@/pages/HealthPolicy'
import AftercarePage from '@/pages/AftercarePage'
import CookiePolicy from '@/pages/CookiePolicy'
import AccessibilityPage from '@/pages/AccessibilityPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F9F4EE]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<ServicesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:category" element={<CategoryPage />} />
            <Route path="/services/:category/:slug" element={<ProductDetailPage />} />
            <Route path="/styles" element={<StylesPage />} />
            <Route path="/membership" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/booking-policy" element={<BookingPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/health-policy" element={<HealthPolicy />} />
            <Route path="/aftercare" element={<AftercarePage />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
