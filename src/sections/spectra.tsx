'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SpectraLogo } from '@/components/SpectraLogo'
import {
  fadeUpVariants,
  viewportOptions,
  createDelayedFadeUp,
} from '@/lib/animations'

export function SpectraSection() {
  return (
    <section id="spectra" className="scroll-mt-20 bg-zinc-900/50">
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <motion.h2
            className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUpVariants}
          >
            Introducing{' '}
            <span className="inline-flex items-center align-baseline">
              <SpectraLogo className="h-[1em] w-auto" />
            </span>{' '}
            our cognitive framework. Modular, Spatial, Extensible.
          </motion.h2>

          {/* Image */}
          <motion.div
            className="relative mt-12 h-[250px] w-full sm:h-[350px] md:mt-16 md:h-[450px] lg:h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={createDelayedFadeUp(0.15)}
          >
            <Image
              alt="Spectra diagram"
              src="/2_Spectra_diagram.png"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Bottom Content */}
          <motion.div
            className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={createDelayedFadeUp(0.25)}
          >
            <p className="max-w-2xl text-base text-gray-400">
              Spectra is a smart brain for the real world. It looks through cameras and maps, understands what it sees,
              and then follows simple rules to do the next right step; either doing it itself or asking another person.
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-sm shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-500/10 hover:text-cyan-100 hover:shadow-md hover:shadow-cyan-500/20"
            >
              Book A Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}