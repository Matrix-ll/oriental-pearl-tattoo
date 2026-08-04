import { Link } from 'react-router-dom'
import { CATEGORIES, CATALOG_PRODUCTS } from '@/data/catalog'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-12">
        <h1 className="font-display text-3xl font-black uppercase tracking-[0.10em] text-stone-800 sm:text-4xl">Our Work</h1>
        <p className="mt-3 font-body text-sm text-stone-500">{CATALOG_PRODUCTS.length} original tattoo projects across {CATEGORIES.length} disciplines.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const count = CATALOG_PRODUCTS.filter((p) => p.categorySlug === cat.slug).length
            return (
              <Link key={cat.slug} to={`/services/${cat.slug}`} className="group block border border-stone-200 bg-white/60 p-6 transition hover:border-stone-400">
                <p className="font-display text-lg font-bold uppercase tracking-[0.06em] text-stone-700">{cat.name}</p>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-stone-400">{count} projects</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xl font-black uppercase tracking-[0.08em] text-stone-700">All Projects</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATALOG_PRODUCTS.map((p) => (
              <Link key={p.id} to={`/services/${p.categorySlug}/${p.slug}`} className="group block border border-stone-200 bg-white/60 overflow-hidden transition hover:border-stone-400">
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-stone-400">{p.category}</p>
                  <p className="mt-2 font-display text-base font-bold uppercase tracking-[0.05em] text-stone-800">{p.name}</p>
                  <p className="mt-2 text-[12px] text-stone-500">{p.scaleOrSession}</p>
                  <p className="mt-3 font-display text-lg font-bold text-stone-700">${p.amount}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
