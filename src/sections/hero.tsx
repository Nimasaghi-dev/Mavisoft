'use client'

import clsx from 'clsx'

const HeroSection = () => {

  return (
    <section
      className={clsx(
        'relative min-h-screen pt-40 px-4 sm:px-6 lg:px-8',
        'flex justify-center',
      )}
    >
      {/* Full-bleed background image */}

      {/* Content */}
      <div className="max-w-3xl text-center text-white">

        {/* Main heading – typical hero sizes */}
        <h1 className="mt-4 text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight">
          We Build Systems That Understand The World
        </h1>

        {/* Subheading / body text */}
        <p className="mt-6 text-base sm:text-lg text-zinc-100/80">
          Our state-of-the-art operating system unifies perception and action across the physical domain.
        </p>

        {/* Red clickable text (Explore Spectra)*/}
        <button
          type="button"
          className="mt-4 flex flex-start text-sm sm:text-base font-medium text-red-400 hover:text-red-300"
        >
          Explore Spectra
        </button>
      </div>
    </section>
  )
}

export default HeroSection
