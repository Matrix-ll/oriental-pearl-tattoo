import { Link } from 'react-router-dom'
import IMGS from '@/data/images'
import { CATEGORIES, CATALOG_PRODUCTS } from '@/data/catalog'

const DESCRIPTIONS: Record<string, string> = {
  "fine-line": "Delicate single-needle precision. Restrained compositions with intentional negative space. Ideal for subtle personal marks and refined botanical studies.",
  "floral-botanical": "Botanical work rooted in observation. Peonies, leaves, sprays, and garden compositions designed to flow with natural anatomy.",
  "blackwork": "Bold contrast and graphic clarity. Ornamental structure, heavy saturation, and disciplined negative space built through black ink alone.",
  "japanese": "Large flowing compositions grounded in traditional Japanese imagery, movement, and anatomical placement. Koi, dragons, waves, and mythology.",
  "traditional": "Strong outlines, enduring symbolism, and timeless compositions. Classic tattoo language with bold lines and solid color saturation.",
  "realism": "Highly rendered portraiture and imagery. Depth, texture, atmosphere, and visual accuracy through controlled tonal range.",
  "lettering": "Custom scripts, names, dates, and typographic compositions. Clarity, rhythm, and permanence through intentional letterforms.",
}

const IMAGE_MAP: Record<string, string> = {
  "fine-line": IMGS.img10,
  "floral-botanical": IMGS.img32,
  "blackwork": IMGS.img34,
  "japanese": IMGS.img16,
  "traditional": IMGS.img38,
  "realism": IMGS.img07,
  "lettering": IMGS.img22,
}

export default function StylesPage() {
  return (
    <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-12">
        <h1 className="font-display text-3xl font-black uppercase tracking-[0.10em] text-stone-800 sm:text-4xl">Styles</h1>
        <p className="mt-3 font-body text-sm text-stone-500">Seven disciplines. One standard. Every project begins with the right visual language.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const count = CATALOG_PRODUCTS.filter((p) => p.categorySlug === cat.slug).length
            const desc = DESCRIPTIONS[cat.slug] || ''
            const img = IMAGE_MAP[cat.slug] || ''
            return (
              <Link
                key={cat.slug}
                to={`/services/${cat.slug}`}
                className="group block border border-stone-200 bg-white/60 overflow-hidden transition hover:border-stone-400"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img src={img} alt={cat.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="font-display text-lg font-bold uppercase tracking-[0.06em] text-stone-800">{cat.name}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-stone-500">{desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-400">{count} projects</p>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500 group-hover:text-stone-700 transition-colors">Explore &rarr;</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
