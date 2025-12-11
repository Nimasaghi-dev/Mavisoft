// src/sections/spectra.tsx
import Image from "next/image"

export function SpectraSection() {
  return (
    <section id="spectra" className="py-16 md:py-24 px-4 scroll-mt-20 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Responsive heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Introducing{' '}
          <span className="bg-gradient-to-r from-cyan-300 to-cyan-700 text-transparent bg-clip-text">
            SPECTRA
          </span>{' '}
          our cognitive framework. Modular, Spatial, Extensible.
        </h2>

        {/* Responsive image container */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] mt-8 md:mt-12">
          <Image
            alt="spectra"
            src="/2_Spectra_diagram.png"
            fill
            className="object-contain"
          />
        </div>

        {/* Responsive footer: stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mt-8">
          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base">
            Spectra is a smart brain for the real world. It looks through cameras and maps, understands what it sees,
            and then follows simple rules to do the next right step; either doing it itself or asking another person.
          </p>
          <button className="shrink-0 rounded-lg border border-cyan-500/30 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-sm shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-500/10 hover:text-cyan-100 hover:shadow-md hover:shadow-cyan-500/20">
            BOOK A DEMO
          </button>
        </div>
      </div>
    </section>
  )
}