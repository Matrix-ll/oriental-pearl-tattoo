import IMGS from '@/data/images'

const ARTISTS = [
  { name: 'Hana Rose', role: 'Resident Artist', image: IMGS.artist4 },
  { name: 'Kenji Watanabe', role: 'Master Artist', image: IMGS.artist3 },
  { name: 'Mei Lin', role: 'Resident Artist', image: IMGS.artist2 },
  { name: 'Ryo Tanaka', role: 'Guest Artist', image: IMGS.artist6 },
]

export default function ArtistsSection() {
  return (
    <section data-component="src/components/ArtistsSection.tsx" className="py-14 sm:py-20" style={{ background: 'linear-gradient(180deg, #F9F4EE 0%, #F2EBE0 100%)' }}>
      <div className="mx-auto max-w-[84rem] px-6 sm:px-10 lg:px-12">
        {/* Pearl accent */}
        <div className="mb-9 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-stone-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
          <span className="h-px w-10 bg-stone-300" />
        </div>
        <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.12em] text-stone-800 sm:text-3xl">OUR ARTISTS</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ARTISTS.map((a) => (
            <div key={a.name} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                <img src={a.image} alt={a.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-3 px-0.5">
                <p className="font-display text-base font-bold uppercase tracking-[0.08em] text-stone-800">{a.name}</p>
                <p className="mt-0.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600">{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
