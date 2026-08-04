import { useParams, Link } from 'react-router-dom'
import { CATEGORIES, CATALOG_PRODUCTS } from '@/data/catalog'

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()
  const catInfo = CATEGORIES.find((c) => c.slug === category)
  const products = CATALOG_PRODUCTS.filter((p) => p.categorySlug === category)

  if (!catInfo) {
    return <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16"><div className="mx-auto max-w-[84rem] px-10 py-20"><p className="text-stone-500">Category not found.</p></div></div>
  }

  return (
    <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-12">
        <Link to="/services" className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-stone-400 hover:text-stone-600">&larr; All Categories</Link>
        <h1 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.10em] text-stone-800 sm:text-4xl">{catInfo.name}</h1>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link key={p.id} to={`/services/${p.categorySlug}/${p.slug}`} className="group block border border-stone-200 bg-white/60 overflow-hidden transition hover:border-stone-400">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="font-display text-base font-bold uppercase tracking-[0.05em] text-stone-800">{p.name}</p>
                <p className="mt-2 text-[12px] text-stone-500">{p.scaleOrSession}</p>
                <p className="mt-2 text-[12px] text-stone-400">{p.colorType} &middot; {p.suitablePlacements}</p>
                <p className="mt-3 font-display text-lg font-bold text-stone-700">${p.amount}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
