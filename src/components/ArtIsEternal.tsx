const ART_IS_ETERNAL_IMAGE = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/KpNlwLtLiOgq09s5Tau6eVK18Ju2/8be8a297-2601-4170-9517-d32b2725a40a/images/1784785331979-nbjlz7ivnxb.png'

export default function ArtIsEternal() {
  return (
    <section
      data-component="src/components/ArtIsEternal.tsx"
      id="art-is-eternal"
      className="bg-black py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-12">
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-accent/70">
              THE CRAFT
            </p>
            <h2 className="mt-8 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-foreground lg:text-5xl">
              BUILT FOR<br />PERMANENCE
            </h2>
            <p className="mt-8 max-w-md font-['Cormorant Garamond'] text-lg leading-relaxed text-accent/80">
              Every line is considered.<br />Every detail is intentional.<br /><br />Created for one person.<br />Made to endure.
            </p>
            <p className="mt-8 font-display text-2xl italic text-accent/60">
              Oriental Pearl
            </p>
          </div>
          <div>
            <img
              src={ART_IS_ETERNAL_IMAGE}
              alt="Sorrowful classical statue tattoo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:hidden">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-accent/70">
            THE CRAFT
          </p>
          <h2 className="mt-6 font-[Playfair Display] text-4xl font-black uppercase leading-[1.05] text-foreground">
            BUILT FOR<br />PERMANENCE
          </h2>
          <p className="mt-8 font-['Cormorant Garamond'] text-lg leading-relaxed text-accent/80">
            Every line is considered.<br />Every detail is intentional.<br /><br />Created for one person.<br />Made to endure.
          </p>
          <p className="mt-8 font-display text-2xl italic text-accent/60">
            Oriental Pearl
          </p>
          <img
            src={ART_IS_ETERNAL_IMAGE}
            alt="Sorrowful classical statue tattoo"
            className="w-[calc(100%+3rem)] max-w-none h-auto object-contain mt-12 -mx-6"
          />
        </div>
      </div>
    </section>
  )
}
