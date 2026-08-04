import IMGS from '@/data/images'

export default function HeroSection() {
  return (
    <section data-component="src/components/HeroSection.tsx" className="relative w-full lg:flex lg:flex-row">

      {/* RIGHT — Photo column with dark background */}
      <div className="relative w-full lg:w-[50%] lg:ml-auto lg:min-h-[740px] z-0">
        <div className="absolute inset-0 bg-[#111111]" />
        <div className="relative" style={{ aspectRatio: '4 / 5' }}>
          <img
            src={IMGS.hero}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>

      {/* Ivory panel SVG — pronounced organic S-curve */}
      <svg className="absolute inset-0 pointer-events-none hidden lg:block z-10" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="ivoryGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F9F4EE" />
            <stop offset="50%" stopColor="#F2EBE0" />
            <stop offset="100%" stopColor="#EAE1D3" />
          </linearGradient>
        </defs>
        {/* Pronounced S-curve: ivory wide at top → narrows inward → widens at bottom */}
        <path
          d="M0 0 L890 0 C870 220, 800 340, 760 480 C740 580, 770 690, 820 780 L790 800 L0 800 Z"
          fill="url(#ivoryGrad)"
        />
      </svg>

      {/* Mobile layout */}
      <div className="lg:hidden absolute top-0 left-0 right-0" style={{ background: 'linear-gradient(180deg, #F9F4EE 0%, #F2EBE0 100%)' }}>
        <div className="px-6 pt-32 pb-10 sm:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-stone-300" />
            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.35em] text-stone-400">PRIVATE ATELIER</span>
          </div>
          <h1 className="font-display text-[2.75rem] font-black uppercase leading-[0.85] tracking-[0.01em] text-stone-800">
            ORIENTAL<br />PEARL
          </h1>
          <p className="mt-1 font-display text-lg font-bold uppercase tracking-[0.35em] text-stone-500">TATTOO</p>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-stone-500">Where ink meets the eternal.</p>
          <div className="mt-5">
            <a href="/booking" className="inline-flex h-10 items-center justify-center border border-stone-400 px-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-stone-600">BOOK APPOINTMENT</a>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full">
        <div style={{ aspectRatio: '4 / 5' }}>
          <img src={IMGS.hero} alt="" className="w-full h-full object-cover object-center" loading="eager" />
        </div>
      </div>

      {/* Desktop typography on ivory panel */}
      <div className="hidden lg:flex absolute inset-0 z-20 pointer-events-none">
        <div className="flex flex-col justify-center w-[50%] px-10 lg:px-14 pb-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-stone-300" />
            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.35em] text-stone-400">PRIVATE ATELIER</span>
          </div>
          <h1 className="mt-5 font-display text-[4rem] font-black uppercase leading-[0.82] tracking-[0.005em] text-stone-800 lg:text-[5rem] xl:text-[5.75rem]">
            ORIENTAL<br />PEARL
          </h1>
          <p className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.30em] text-stone-500 lg:text-3xl">TATTOO</p>
          <div className="mt-6 flex items-center gap-6 pointer-events-auto">
            <span className="h-px w-32 bg-stone-300" />
            <a href="/booking" className="inline-flex h-10 items-center justify-center border border-stone-400 px-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-stone-600 transition hover:border-stone-600 hover:text-stone-800">
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </div>

      {/* Pearl orb — ~54% width, ~87% height, larger 56px */}
      <div className="absolute left-[54%] -translate-x-1/2 top-[87%] z-30 hidden lg:block pointer-events-none">
        <div className="relative">
          <div className="h-14 w-14 rounded-full flex items-center justify-center"
            style={{ background: 'radial-gradient(circle at 35% 35%, #FDFAF5, #D4CFC4, #A09888)', boxShadow: '0 3px 20px rgba(180,170,155,0.5)' }}>
            <div className="h-5 w-5 rounded-full bg-white/70" />
          </div>
          <div className="absolute -inset-3 rounded-full border border-stone-300/30" />
          <div className="absolute -inset-5 rounded-full border border-stone-300/15" />
        </div>
      </div>

      {/* Bottom curve */}
      <svg className="absolute bottom-0 left-0 w-full z-10 pointer-events-none" viewBox="0 0 1440 45" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 45 Q500 6 720 15 Q940 24 1440 6 L1440 45 Z" fill="#111111" />
      </svg>
    </section>
  )
}
