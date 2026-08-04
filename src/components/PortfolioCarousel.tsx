import IMGS from '@/data/images'

const WORKS = [
  { image: IMGS.fullback, title: 'Cherry Blossom', shape: '54% 46% 56% 44% / 42% 58% 42% 58%' },
  { image: IMGS.sleeve, title: 'Garden Sleeve', shape: '42% 58% 44% 56% / 55% 42% 58% 45%' },
  { image: IMGS.floral, title: 'Blooming Peony', shape: '50% 50% 48% 52% / 40% 60% 50% 50%' },
  { image: IMGS.peony, title: 'Wind & Cloud', shape: '56% 44% 52% 48% / 54% 46% 52% 48%' },
]

export default function PortfolioCarousel() {
  return (
    <section data-component="src/components/PortfolioCarousel.tsx" className="bg-[#111111] py-14 sm:py-20">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-12">
        <div className="mb-9 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-stone-700" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8B89A]/40" />
          <span className="h-px w-10 bg-stone-700" />
        </div>
        <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.12em] text-[#D4CFC4] sm:text-3xl">SELECTED WORKS</h2>

        {/* Carousel */}
        <div className="mt-10 flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {WORKS.map((w) => (
            <div key={w.title} className="flex-shrink-0 w-[65vw] sm:w-[280px] snap-center">
              <div className="overflow-hidden border border-[#C8B89A]/25" style={{ borderRadius: w.shape, aspectRatio: '3 / 4' }}>
                <img src={w.image} alt={w.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <p className="mt-4 text-center font-display text-sm font-bold uppercase tracking-[0.10em] text-[#D4CFC4]/80">{w.title}</p>
            </div>
          ))}
        </div>

        {/* Navigation arrows + dots */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button className="h-8 w-8 rounded-full border border-[#C8B89A]/30 flex items-center justify-center text-[#D4CFC4]/50 hover:text-[#D4CFC4] hover:border-[#C8B89A]/60 transition"
            aria-label="Previous">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span className="h-2 w-2 rounded-full bg-[#C8B89A]/50" />
          <span className="h-2 w-2 rounded-full bg-[#C8B89A]/25" />
          <span className="h-2 w-2 rounded-full bg-[#C8B89A]/25" />
          <span className="h-2 w-2 rounded-full bg-[#C8B89A]/25" />
          <button className="h-8 w-8 rounded-full border border-[#C8B89A]/30 flex items-center justify-center text-[#D4CFC4]/50 hover:text-[#D4CFC4] hover:border-[#C8B89A]/60 transition"
            aria-label="Next">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
