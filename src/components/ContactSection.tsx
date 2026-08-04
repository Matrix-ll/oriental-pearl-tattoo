import { STUDIO } from '@/data/seed'

const HOURS = STUDIO.hours

export default function ContactSection() {
  return (
    <section data-component="src/components/ContactSection.tsx" className="relative overflow-hidden py-14 sm:py-20" style={{ background: 'linear-gradient(180deg, #F9F4EE 0%, #F2EBE0 100%)' }}>
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 60 Q360 20 720 32 Q1080 45 1440 15 L1440 60 Z" fill="#111111" />
      </svg>

      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-12 relative z-10 pb-10">
        <div className="mb-9 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-stone-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
          <span className="h-px w-10 bg-stone-300" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div>
            <h3 className="font-display text-lg font-black uppercase tracking-[0.12em] text-stone-800">CONTACT US</h3>
            <div className="mt-5 space-y-3">
              <div><p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-stone-400">ADDRESS</p><p className="mt-1 text-[13px] text-stone-600 leading-relaxed">{STUDIO.address}</p></div>
              <div><p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-stone-400">PHONE</p><p className="mt-1 text-[13px] text-stone-600">{STUDIO.phone}</p></div>
              <div><p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-stone-400">EMAIL</p><p className="mt-1 text-[13px] text-stone-600">{STUDIO.email}</p></div>
              <div>
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-stone-400">HOURS</p>
                {HOURS.map((h) => (
                  <p key={h.day} className="mt-0.5 text-[12px] text-stone-500">{h.day} <span className="text-stone-400">{h.time}</span></p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <div className="h-16 w-16 rounded-full flex items-center justify-center"
                style={{ background: 'radial-gradient(circle at 35% 35%, #FDFAF5, #D4CFC4, #A09888)', boxShadow: '0 4px 28px rgba(180,170,155,0.3)' }}>
                <div className="h-4 w-4 rounded-full bg-white/70" />
              </div>
              <div className="absolute -inset-3 rounded-full border border-stone-300/25" />
              <div className="absolute -inset-6 rounded-full border border-stone-300/12" />
            </div>
            <div className="mt-2">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#9CAF90" strokeWidth="1.2" opacity="0.5">
                <path d="M20 20 Q18 12 12 6 Q16 10 20 0 Q24 10 28 6 Q22 12 20 20Z" fill="#9CAF90" fillOpacity="0.1"/>
                <path d="M20 20 Q18 12 12 6" />
                <path d="M20 20 Q24 12 28 6" />
              </svg>
            </div>
            <p className="mt-4 text-center font-body text-xs text-stone-400 italic max-w-[160px]">Permanent art, commissioned for one.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-black uppercase tracking-[0.12em] text-stone-800">SEND A MESSAGE</h3>
            <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className="w-full border border-stone-300 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-400" />
              <input type="email" placeholder="Email" className="w-full border border-stone-300 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-400" />
              <textarea placeholder="Message" rows={4} className="w-full border border-stone-300 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-400 resize-none" />
              <button type="submit" className="inline-flex h-10 items-center justify-center px-6 text-[10px] font-semibold uppercase tracking-[0.20em] text-white transition"
                style={{ background: '#9CAF90' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
