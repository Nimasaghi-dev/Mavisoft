'use client'

import { SpectraLogo } from '@/components/SpectraLogo'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'We Build Systems That Understand The World.'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 70)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 top-16 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/1_Globe_Image.jpg')" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950/60" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap xl:text-[3.5rem]">
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-200/90 sm:text-lg">
            Our state-of-the-art operating system unifies perception and action across the physical domain.
          </p>
          <a
            href="#spectra"
            className="group /* Changed from cyan-400 to red-400 */ /* Changed from cyan-100 to red-200 */ relative mt-8 inline-flex items-center gap-2 overflow-visible text-sm font-medium text-red-400 transition-all duration-700 ease-out hover:gap-4 hover:text-red-200 sm:text-base"
          >
            <span className="inline-flex items-center gap-2 text-lg transition-all duration-500 group-hover:translate-x-1">
              Explore
              <SpectraLogo className="h-[0.9em] w-auto text-3xl" />
            </span>
            <span
              aria-hidden="true"
              className="/* Changed from cyan-200 to red-200 */ /* Changed to red */ relative inline-block transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:scale-140 group-hover:text-red-200 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]"
            ></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
