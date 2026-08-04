import { Link } from 'react-router-dom'

export default function Manifesto() {
  return (
    <section
      data-component="src/components/Manifesto.tsx"
      className="bg-black py-16 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
        {/* DESKTOP — two-column editorial */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-accent/70">
              ABOUT
            </p>
            <h2 className="mt-8 font-[Playfair Display] text-5xl font-black uppercase leading-[1.05] text-white lg:text-6xl">
              MORE THAN<br />A TATTOO<br />STUDIO.
            </h2>
          </div>
          {/* Right column */}
          <div className="flex flex-col justify-end">
            <p className="max-w-md font-['Cormorant Garamond'] text-xl leading-relaxed text-accent/80">
              Every tattoo is created for one person only.
            </p>
            <p className="mt-4 max-w-md font-['Cormorant Garamond'] text-xl leading-relaxed text-accent/80">
              No templates.
            </p>
            <p className="mt-4 max-w-md font-['Cormorant Garamond'] text-xl leading-relaxed text-accent/80">
              No repetition.
            </p>
            <p className="mt-4 max-w-md font-['Cormorant Garamond'] text-xl leading-relaxed text-accent/80">
              No compromise.
            </p>
            <p className="mt-8 max-w-md font-['Cormorant Garamond'] text-lg leading-relaxed text-white/55">
              We believe permanent art deserves permanent care.
            </p>
            <Link
              to="/booking"
              className="mt-10 inline-flex h-12 items-center border border-accent/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition hover:border-accent"
            >
              BOOK YOUR CONSULTATION
            </Link>
          </div>
        </div>

        {/* MOBILE — stacked */}
        <div className="flex flex-col lg:hidden">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-accent/70">
            ABOUT
          </p>
          <h2 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-foreground">
            MORE THAN<br />A TATTOO<br />STUDIO.
          </h2>
          <p className="mt-10 font-['Cormorant Garamond'] text-lg leading-relaxed text-accent/80">
            Every tattoo is created for one person only.
          </p>
          <p className="mt-3 font-['Cormorant Garamond'] text-lg leading-relaxed text-accent/80">
            No templates.
          </p>
          <p className="mt-3 font-['Cormorant Garamond'] text-lg leading-relaxed text-accent/80">
            No repetition.
          </p>
          <p className="mt-3 font-['Cormorant Garamond'] text-lg leading-relaxed text-accent/80">
            No compromise.
          </p>
          <p className="mt-8 font-['Cormorant Garamond'] text-base leading-relaxed text-foreground/55">
            We believe permanent art deserves permanent care.
          </p>
          <Link
            to="/booking"
            className="mt-8 inline-flex h-12 w-fit items-center border border-accent/60 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition hover:border-accent"
          >
            BOOK YOUR CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}
