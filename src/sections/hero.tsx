'use client'

import { SpectraLogo } from '@/components/SpectraLogo'
import { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { standardTransition } from '@/lib/animations'

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

  // Hero content variants - properly typed
  const heroContentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...standardTransition,
        duration: 0.8,
      },
    },
  }

  const heroStaggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  //cinematic reveal
  const backgroundRevealVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image with Cinematic Reveal */}
      <motion.div
        className="absolute inset-0 top-16 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/1_Globe_Image.jpg')" }}
        initial="hidden"
        animate="visible"
        variants={backgroundRevealVariants}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={heroStaggerContainer}
      >
        <div className="max-w-4xl">
          <motion.h1
            className="text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap xl:text-[3.5rem]"
            variants={heroContentVariants}
          >
            {displayedText}
            <span className="animate-blink">|</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base text-zinc-200/90 sm:text-lg"
            variants={heroContentVariants}
          >
            Our state-of-the-art operating system unifies perception and action across the physical
            domain.
          </motion.p>
          <motion.a
            href="#spectra"
            className="group relative mt-8 inline-flex items-center gap-2 overflow-visible text-sm font-medium text-red-400 transition-all duration-700 ease-out hover:gap-4 hover:text-red-200 sm:text-base"
            variants={heroContentVariants}
          >
            <span className="inline-flex items-center gap-2 text-lg transition-all duration-500 group-hover:translate-x-1">
              Explore
              <SpectraLogo className="h-[0.9em] w-auto text-3xl" />
            </span>
            <span
              aria-hidden="true"
              className="relative inline-block transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:scale-140 group-hover:text-red-200 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]"
            ></span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection