import { STUDIO } from '@/data/seed'

export default function FAQPage() {
  const faqs = [
    { q: 'How do I book an appointment?', a: `Visit our Booking page or call us at ${STUDIO.phone}. We will schedule a consultation to discuss your vision, placement, and timeline.` },
    { q: 'Is a deposit required?', a: 'Yes. A 15% deposit is required to secure your appointment and is applied toward the final cost of your tattoo.' },
    { q: 'Can I reschedule or cancel?', a: 'We require at least 48 hours notice for rescheduling. Deposits may be applied to a rescheduled appointment. Cancellations within 48 hours may forfeit the deposit.' },
    { q: 'What should I do before my appointment?', a: 'Arrive well-rested, hydrated, and having eaten a full meal. Avoid alcohol for 24 hours prior. Wear comfortable clothing that permits access to the tattoo area.' },
    { q: 'How should I care for my tattoo?', a: 'Keep the bandage on for the recommended period. Wash gently with unscented soap, pat dry, and apply a thin layer of recommended ointment. Avoid sun exposure, swimming, and soaking until fully healed. Detailed aftercare instructions are provided at your appointment.' },
    { q: 'Do you accept walk-ins?', a: 'No. Oriental Pearl Tattoo is a private atelier operating by appointment only. Every project begins with a consultation.' },
    { q: 'What is the minimum age?', a: 'You must be 18 years or older with valid government-issued photo ID. No exceptions.' },
    { q: 'How is pricing determined?', a: 'Pricing is based on size, detail, placement, and estimated session count. Our Pricing page lists starting rates for all project categories.' },
  ]

  return (
    <div className="min-h-screen bg-[#F9F4EE] pt-24 pb-16">
      <div className="mx-auto max-w-[44rem] px-6 sm:px-10 lg:px-12">
        <h1 className="font-display text-3xl font-black uppercase tracking-[0.10em] text-stone-800 sm:text-4xl">FAQ</h1>
        <p className="mt-3 font-body text-sm text-stone-600">Common questions about booking, preparation, aftercare, and our studio policies.</p>
        <div className="mt-10 space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-stone-200 pb-5">
              <p className="font-display text-base font-bold uppercase tracking-[0.04em] text-stone-700">{f.q}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-stone-600">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8 text-center">
          <p className="font-display text-lg font-black uppercase tracking-[0.08em] text-stone-700">Still have a question?</p>
          <p className="mt-2 text-[13px] text-stone-600">Send us a message or begin a consultation and we will guide you from there.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="/booking" className="inline-flex h-11 items-center justify-center bg-stone-800 px-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F9F4EE]">Begin a Consultation</a>
            <a href={`mailto:${STUDIO.email}`} className="inline-flex h-11 items-center justify-center border border-stone-300 px-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-600">Contact the Studio</a>
          </div>
        </div>
      </div>
    </div>
  )
}
