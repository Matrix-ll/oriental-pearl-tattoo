import { Link } from 'react-router-dom'
import { STUDIO } from '@/data/seed'

export default function Footer() {
  return (
    <footer data-component="src/components/Footer.tsx" className="relative border-t border-stone-200 bg-[#F9F4EE]">
      <div className="mx-auto max-w-[84rem] px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-black uppercase tracking-[0.15em] text-stone-800">Oriental Pearl</p>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-stone-500">
              A private atelier for permanent art. Commissioned originals, absolute discretion, luminous precision.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">Studio</p>
            <div className="mt-4 space-y-2">
              <p className="text-[13px] text-stone-500">{STUDIO.address}</p>
              <p className="text-[13px] text-stone-500">{STUDIO.phone}</p>
              <p className="text-[13px] text-stone-500">{STUDIO.email}</p>
              <p className="text-[13px] text-stone-400">By appointment only</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">Navigate</p>
            <div className="mt-4 space-y-2">
              <Link to="/work" className="block text-[13px] text-stone-500 hover:text-stone-700 transition-colors">Work</Link>
              <Link to="/services" className="block text-[13px] text-stone-500 hover:text-stone-700 transition-colors">Services</Link>
              <Link to="/pricing" className="block text-[13px] text-stone-500 hover:text-stone-700 transition-colors">Pricing</Link>
              <Link to="/faq" className="block text-[13px] text-stone-500 hover:text-stone-700 transition-colors">FAQ</Link>
              <Link to="/booking" className="block text-[13px] text-stone-500 hover:text-stone-700 transition-colors">Booking</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-stone-200 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-stone-400">
          <Link to="/privacy" className="hover:text-stone-600">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-stone-600">Terms of Service</Link>
          <Link to="/booking-policy" className="hover:text-stone-600">Booking Policy</Link>
          <Link to="/refund-policy" className="hover:text-stone-600">Refund Policy</Link>
          <Link to="/health-policy" className="hover:text-stone-600">Health & Consent</Link>
          <Link to="/aftercare" className="hover:text-stone-600">Aftercare</Link>
          <Link to="/cookies" className="hover:text-stone-600">Cookies</Link>
          <Link to="/accessibility" className="hover:text-stone-600">Accessibility</Link>
        </div>
        <p className="mt-4 text-[11px] text-stone-400">&copy; 2026 Oriental Pearl Tattoo. All rights reserved.</p>
      </div>
    </footer>
  )
}
