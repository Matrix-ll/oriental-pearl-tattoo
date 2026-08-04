import { useParams, Link } from 'react-router-dom'
import { CATALOG_PRODUCTS } from '@/data/catalog'

export default function ProductDetailPage() {
  const { slug } = useParams<{ category: string; slug: string }>()
  const product = CATALOG_PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    return <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16"><div className="mx-auto max-w-[84rem] px-10 py-20"><p className="text-stone-600">Product not found.</p></div></div>
  }

  return (
    <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16">
      <div className="mx-auto max-w-[48rem] px-6 sm:px-10 lg:px-12">
        <Link to={`/services/${product.categorySlug}`} className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-stone-600 hover:text-stone-600">&larr; {product.category}</Link>

        <div className="mt-6 aspect-[16/10] overflow-hidden bg-stone-100 border border-stone-300">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <h1 className="mt-8 font-display text-3xl font-black uppercase tracking-[0.08em] text-stone-800 sm:text-4xl">{product.name}</h1>
        <p className="mt-2 font-display text-2xl font-bold text-stone-700">${product.amount}</p>

        <div className="mt-10 space-y-5">
          <div><p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-600">Scale & Sessions</p><p className="mt-1 text-[14px] text-stone-600">{product.scaleOrSession}</p></div>
          <div><p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-600">Color</p><p className="mt-1 text-[14px] text-stone-600">{product.colorType}</p></div>
          <div><p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-600">Suitable Placements</p><p className="mt-1 text-[14px] text-stone-600">{product.suitablePlacements}</p></div>
        </div>

        <div className="mt-10 space-y-3 border-t border-stone-300 pt-8">
          <p className="text-[13px] text-stone-600"><span className="font-semibold">Included:</span> Consultation, custom design, execution across indicated sessions, aftercare kit, healing guidance.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={product.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center bg-stone-800 px-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F9F4EE] transition hover:bg-stone-700"
          >
            Purchase &amp; Pay in Full
          </a>
        </div>
      </div>
    </div>
  )
}
