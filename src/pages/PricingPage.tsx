import { Link } from 'react-router-dom'
import { CATEGORIES, CATALOG_PRODUCTS } from '@/data/catalog'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-12">
        <h1 className="font-display text-3xl font-black uppercase tracking-[0.10em] text-stone-800 sm:text-4xl">Pricing</h1>
        <p className="mt-3 font-body text-sm text-stone-600">Transparent pricing. Every project includes consultation, custom design, execution, aftercare kit, and healing guidance. A 15% deposit reserves your appointment.</p>

        {CATEGORIES.map((cat) => {
          const items = CATALOG_PRODUCTS.filter((p) => p.categorySlug === cat.slug)
          if (items.length === 0) return null
          return (
            <div key={cat.slug} className="mt-12">
              <h2 className="font-display text-xl font-black uppercase tracking-[0.06em] text-stone-700">{cat.name}</h2>
              <div className="mt-4 space-y-2">
                {items.map((p) => (
                  <Link key={p.id} to={`/services/${p.categorySlug}/${p.slug}`} className="flex items-center justify-between border border-stone-300 bg-white/50 px-5 py-3 transition hover:border-stone-400">
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-[0.04em] text-stone-800">{p.name}</p>
                      <p className="mt-0.5 text-[11px] text-stone-600">{p.scaleOrSession}</p>
                    </div>
                    <p className="font-display text-lg font-bold text-stone-700">${p.amount}</p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}

        <div className="mt-16 border-t border-stone-300 pt-10">
          <p className="text-center text-[13px] text-stone-600">Pricing reflects starting rates. Final cost confirmed during consultation. <Link to="/booking" className="underline hover:text-stone-700">Book yours today.</Link></p>
        </div>

        {/* CUSTOM PRICING — section matching site palette with custom-amount Stripe payment */}
        <div className="mt-16 px-6 py-16 sm:px-12 sm:py-20 text-center border border-stone-300" style={{ background: 'linear-gradient(180deg, #F9F4EE 0%, #F2EBE0 100%)' }}>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.30em] text-stone-600">Custom Pricing</p>
          <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1.05] text-stone-800 sm:text-4xl lg:text-5xl">
            Your Idea,<br />Your Investment
          </h2>
          <p className="mt-6 font-display text-2xl italic text-[#A38855] sm:text-3xl">$1 — $5,000</p>
          <p className="mx-auto mt-6 max-w-md font-body text-[15px] leading-relaxed text-stone-600">
            Not every piece fits a fixed price. Whether it's a tiny symbol or a full back piece, we'll work with you. Bring your idea and your budget — we'll make something timeless.
          </p>
          <div className="mt-10">
            <a
              href="https://buy.stripe.com/aFa14g99Hclg4YyduWgMw0z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center bg-[#C8B89A] px-10 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#B8A888]"
            >
              Make a Custom Payment
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
