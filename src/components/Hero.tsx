const HERO_IMG = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/e9df8c04-30a3-4b2c-8dd0-01a1e558fbe8/images/1784554591676-kgouoqy2p88.jpg'

// fig-anchor-degraded: entrance-animation -> shipped-minimal
// fig-entrance: fade-in
export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black animate-in fade-in">
      {/* Full-bleed hero image — no overlays, no gradients, no effects */}
      <img
        src={HERO_IMG}
        alt="Oriental Pearl Tattoo — artist at work"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />

      {/* Typography on the left — dark negative space of the image */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-[38%] lg:max-w-[35%]">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.30em] text-accent">
              PRIVATE ATELIER &bull; [LOCATION TBD]
            </p>

            <h1 className="mt-8 font-[Playfair Display] text-4xl font-black uppercase leading-[0.92] tracking-[0.03em] text-foreground sm:text-5xl lg:text-7xl xl:text-8xl">
              ORIENTAL<br />PEARL
            </h1>

            <p className="mt-1 font-[Playfair Display] text-xl font-bold uppercase tracking-[0.30em] text-foreground sm:text-2xl lg:text-3xl">
              TATTOO
            </p>

            <p className="mt-8 font-['Cormorant Garamond'] text-base leading-relaxed text-accent/85 sm:text-lg">
              Where ink meets the eternal. Permanent art, commissioned for one.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/booking"
                className="inline-flex h-13 items-center justify-center bg-accent px-10 text-xs font-semibold uppercase tracking-[0.18em] text-background transition hover:bg-accent/80"
              >
                BOOK APPOINTMENT
              </a>
              <a
                href="/gallery"
                className="inline-flex h-13 items-center justify-center border border-accent/60 px-10 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition hover:border-accent"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
