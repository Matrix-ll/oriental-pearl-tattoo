export default function PearlCTA() {
  return (
    <section
      data-component="src/components/PearlCTA.tsx"
      className="bg-background py-20 sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Pearl orb */}
          <div className="relative mb-10">
            <div
              className="h-16 w-16 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #F5F0E8, #D4CFC4, #A09888)',
                boxShadow: '0 4px 24px rgba(180,170,155,0.3)',
              }}
            >
              <div className="h-4 w-4 rounded-full bg-white/60" />
            </div>
            <div className="absolute -inset-4 rounded-full border border-stone-300/30" />
            <div className="absolute -inset-8 rounded-full border border-stone-300/15" />
          </div>

          <h2 className="font-display text-3xl font-black uppercase leading-[1.05] text-foreground sm:text-4xl lg:text-5xl">
            BEGIN YOUR JOURNEY
          </h2>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-muted-foreground">
            Reserve your consultation with a 15% deposit. Every piece begins with a conversation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="/booking"
              className="inline-flex h-13 items-center justify-center bg-accent px-10 text-xs font-semibold uppercase tracking-[0.18em] text-background transition hover:bg-accent/80"
            >
              BOOK APPOINTMENT
            </a>
            <a
              href="/contact"
              className="inline-flex h-13 items-center justify-center border border-accent/60 px-10 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition hover:border-accent"
            >
              CONTACT US
            </a>
          </div>

          {/* Pearl line */}
          <div className="mt-20 flex items-center gap-3">
            <div className="h-px w-12 bg-stone-700" />
            <div className="h-1.5 w-1.5 rounded-full bg-stone-500" />
            <div className="h-px w-48 bg-stone-700" />
            <div className="h-1.5 w-1.5 rounded-full bg-stone-500" />
            <div className="h-px w-12 bg-stone-700" />
          </div>
        </div>
      </div>
    </section>
  )
}
