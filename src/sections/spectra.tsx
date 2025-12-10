// src/sections/spectra.tsx
export function SpectraSection() {
  return (
    <section id="spectra" className="py-24 px-4 scroll-mt-20 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 
            className="text-3xl sm:text-4xl font-bold"
        >
            Introducing <span className='bg-gradient-to-r from-cyan-300 to-cyan-700 text-transparent bg-clip-text'>
                {" "}SPECTRA
                </span> our cognitive framework. Modular, Spatial, Extensible.
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl">
            Spectra content goes here...
        </p>
      </div>
    </section>
  )
}