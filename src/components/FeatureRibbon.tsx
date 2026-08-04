import IMGS from '@/data/images'

const STEPS = [
  { num: '01', label: 'Consultation', desc: 'Share your vision one-on-one.' },
  { num: '02', label: 'Design', desc: 'Original artwork, custom-drawn.' },
  { num: '03', label: 'Application', desc: 'Sterile precision, lasting art.' },
  { num: '04', label: 'Aftercare', desc: 'Annual check-ins included.' },
]

export default function FeatureRibbon() {
  return (
    <section data-component="src/components/FeatureRibbon.tsx" className="relative bg-[#111111] pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Curved transition from ivory hero above — sits at top, no overlap */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 60 Q480 10 720 25 Q960 40 1440 10 L1440 60 Z" fill="#F9F4EE" />
      </svg>
      {/* Left circular photo — partially cropped */}
      <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 h-[170px] w-[170px] rounded-full overflow-hidden border border-[#C8B89A]/30 hidden lg:block">
        <img src={IMGS.sleeve} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>

      {/* Right circular photo — partially cropped */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 h-[170px] w-[170px] rounded-full overflow-hidden border border-[#C8B89A]/30 hidden lg:block">
        <img src={IMGS.peony} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Four icon circles */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {STEPS.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center w-[130px] sm:w-[150px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C8B89A]/55 mb-2">
                {s.num === '01' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8B89A" strokeWidth="1.5" opacity="0.55"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
                {s.num === '02' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8B89A" strokeWidth="1.5" opacity="0.55"><path d="M12 3l9 5v8l-9 5-9-5V8z"/><circle cx="12" cy="12" r="3"/></svg>}
                {s.num === '03' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8B89A" strokeWidth="1.5" opacity="0.55"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                {s.num === '04' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8B89A" strokeWidth="1.5" opacity="0.55"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>}
              </div>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7A8B6F] text-[10px] font-bold text-white mt-1 mb-1.5">{s.num}</span>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D4CFC4]">{s.label}</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-stone-600 font-body">{s.desc}</p>
            </div>
          ))}
        </div>
        {/* Connecting gold line */}
        <div className="mt-8 flex items-center justify-center gap-0">
          <span className="h-px w-10 bg-[#C8B89A]/20 sm:w-16" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8B89A]/40" />
          <span className="h-px w-full max-w-[380px] bg-[#C8B89A]/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8B89A]/40" />
          <span className="h-px w-10 bg-[#C8B89A]/20 sm:w-16" />
        </div>
      </div>
    </section>
  )
}
