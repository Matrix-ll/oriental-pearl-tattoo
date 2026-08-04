import IMGS from '@/data/images'

export default function CraftSection() {
  return (
    <section
      data-component="src/components/CraftSection.tsx"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
      style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6D9 100%)' }}
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
        <div className="mb-16 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-stone-300" />
          <div className="h-1.5 w-1.5 rounded-full bg-stone-400" />
          <div className="h-px w-16 bg-stone-300" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-3">
          <div className="flex justify-center">
            <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] rounded-full overflow-hidden border-2 border-stone-400 shadow-lg">
              <img
                src={IMGS.sleeve}
                alt="Full-sleeve floral tattoo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-stone-600">
              THE CRAFT
            </p>
            <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1.05] text-stone-900 sm:text-4xl lg:text-5xl">
              BUILT FOR<br />PERMANENCE
            </h2>
            <p className="mt-8 mx-auto max-w-sm font-body text-lg leading-relaxed text-stone-600">
              Every line is considered. Every detail intentional. Created for one person. Made to endure.
            </p>
            <p className="mt-8 font-display text-2xl italic text-stone-600">
              Oriental Pearl
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] rounded-full overflow-hidden border-2 border-stone-400 shadow-lg">
              <img
                src={IMGS.back}
                alt="Cherry blossom back tattoo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-stone-300" />
          <div className="h-1.5 w-1.5 rounded-full bg-stone-400" />
          <div className="h-px w-16 bg-stone-300" />
        </div>
      </div>
    </section>
  )
}
