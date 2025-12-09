'use client'

import clsx from 'clsx'

const HeroSection = () => {
  return (
    <section
      className={clsx(
        'relative min-h-screen',
        'flex items-center pb-30 pr-102',
        'animate-fadeSlide'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left text-white">
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-4xl font-semibold tracking-tight">
            We Build Systems That Understand The World
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-100/80">
            Our state-of-the-art operating system unifies perception and action across the physical domain.
          </p>
          <button
            type="button"
            className="mt-6 cursor-pointer inline-flex text-sm sm:text-base font-medium text-red-400 hover:text-red-300"
          >
            Explore Spectra
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
