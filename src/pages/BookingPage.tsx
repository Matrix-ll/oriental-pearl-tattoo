import { STUDIO } from '@/data/seed'

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16">
      <div className="mx-auto max-w-[40rem] px-6 sm:px-10 lg:px-12">
        <h1 className="font-display text-3xl font-black uppercase tracking-[0.10em] text-stone-800 sm:text-4xl">Book a Consultation</h1>
        <p className="mt-3 font-body text-sm text-stone-600">Tell us about your vision, and we will guide you from there.</p>

        <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-600">Name</label>
              <input type="text" required className="mt-1.5 w-full border border-stone-400 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 focus:outline-none focus:border-stone-500" />
            </div>
            <div>
              <label className="block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-600">Email</label>
              <input type="email" required className="mt-1.5 w-full border border-stone-400 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 focus:outline-none focus:border-stone-500" />
            </div>
          </div>
          <div>
            <label className="block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-600">Phone</label>
            <input type="tel" className="mt-1.5 w-full border border-stone-400 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 focus:outline-none focus:border-stone-500" />
          </div>
          <div>
            <label className="block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-600">Project Type</label>
            <select className="mt-1.5 w-full border border-stone-400 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 focus:outline-none focus:border-stone-500">
              <option>Select a category...</option>
              <option>Fine Line</option><option>Floral & Botanical</option><option>Blackwork</option><option>Japanese</option><option>Traditional</option><option>Realism</option><option>Lettering</option><option>Large Scale / Custom</option>
            </select>
          </div>
          <div>
            <label className="block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-600">Describe Your Vision</label>
            <textarea rows={5} className="mt-1.5 w-full border border-stone-400 bg-white/60 px-3 py-2.5 text-[13px] text-stone-700 focus:outline-none focus:border-stone-500 resize-none" placeholder="Placement, size, subject matter, style preferences, and any reference ideas..." />
          </div>
          <button type="submit" className="inline-flex h-11 items-center justify-center bg-stone-800 px-10 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F9F4EE] transition hover:bg-stone-700">
            Submit Request
          </button>
        </form>

        <div className="mt-12 border-t border-stone-300 pt-8 text-[13px] text-stone-600 space-y-2">
          <p>You can also reach us directly:</p>
          <p>Phone: {STUDIO.phone}</p>
          <p>Email: {STUDIO.email}</p>
          <p>Address: {STUDIO.address}</p>
        </div>
      </div>
    </div>
  )
}
