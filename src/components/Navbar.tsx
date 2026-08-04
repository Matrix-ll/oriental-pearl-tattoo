import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Styles', href: '/styles' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Booking', href: '/booking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [close])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, close])

  return (
    <header data-component="src/components/Navbar.tsx" className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-[100rem] items-center gap-3 px-5 py-4 sm:px-8" ref={ref}>
        <Link to="/" aria-label="Oriental Pearl Tattoo — Home" className="z-50">
          <img
            src="https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/db5c8fe6-8110-4aa8-8072-e0f3987a64fc/images/1785873326455-plg5cuhttji.png"
            alt="Oriental Pearl Tattoo"
            className="h-9 w-9 object-contain"
          />
        </Link>

        <button
          className="z-50 p-1 text-stone-600 hover:text-stone-600 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {/* Compact dropdown — anchored to emblem area, small and contained */}
        {open && (
          <div className="absolute top-[60px] left-5 sm:left-8 w-[260px] rounded-sm border border-stone-300 bg-[#F9F4EE] shadow-lg py-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={close}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.10em] transition-colors ${
                    isActive ? 'text-stone-800 bg-stone-100' : 'text-stone-600 hover:text-stone-700 hover:bg-stone-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
