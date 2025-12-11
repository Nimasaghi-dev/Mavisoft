'use client'

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 top-16 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/1_Globe_Image.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950/60" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap xl:text-[3.5rem]">
            We Build Systems That Understand The World
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-200/90 sm:text-lg">
            Our state-of-the-art operating system unifies perception and action across the physical domain.
          </p>
          <a
            href="#spectra"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300 sm:text-base"
          >
            Explore Spectra
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
