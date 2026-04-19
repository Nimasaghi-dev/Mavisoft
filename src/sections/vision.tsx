'use client'

import { motion } from 'framer-motion'
import {
  slideInLeftVariants,
  staggerContainerVariants,
  staggerChildVariants,
  viewportOptions,
  createDelayedSlideLeft,
} from '@/lib/animations'

const VisionSection = () => {
  const cards = [
    {
      icon: '/Perception_Icon.svg',
      logoDark: '/Perception_Icon.svg',
      title: 'Perception',
      description:
        'Understanding the world through multi-modal sensing, transforming raw signals into meaningful representations.',
    },
    {
      icon: '/public/Comprehension_Icon.svg',
      logoDark: '/public/Comprehension_Icon.svg',
      title: 'Structure',
      description:
        'Organizing complexity into coherent frameworks that reveal underlying patterns and relationships.',
    },
    {
      icon: '/public/Action_Icon.svg',
      logoDark: '/public/Action_Icon.svg',
      title: 'Action',
      description:
        'Leveraging AI models and detections to create workflows and define meaningful events.',
    },
  ]

  const partnerLogos = [
    {
      name: 'Tuple',
      light: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg',
      dark: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg',
    },
    {
      name: 'Reform',
      light: 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg',
      dark: 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-white.svg',
    },
    {
      name: 'SavvyCal',
      light: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
      dark: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-white.svg',
    },
    {
      name: 'Laravel',
      light: 'https://tailwindcss.com/plus-assets/img/logos/laravel-logo-gray-900.svg',
      dark: 'https://tailwindcss.com/plus-assets/img/logos/laravel-logo-white.svg',
    },
    {
      name: 'Transistor',
      light: 'https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg',
      dark: 'https://tailwindcss.com/plus-assets/img/logos/transistor-logo-white.svg',
    },
    {
      name: 'Statamic',
      light: 'https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg',
      dark: 'https://tailwindcss.com/plus-assets/img/logos/statamic-logo-white.svg',
    },
  ]

  return (
    <section id="vision" className="scroll-mt-20 bg-black">
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={slideInLeftVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              The World Is{' '}
              <span className="text-cyan-400">
                Complex, Dynamic, Interdepended.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-zinc-400">
              We build general-purpose perception that binds reality into structure and meaning.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="mt-12 md:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainerVariants}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={staggerChildVariants}
                className="group border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <img src={card.icon} alt="" className="h-8 w-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-white">{card.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            className="mt-16 border-t border-gray-800 pt-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={createDelayedSlideLeft(0.1)}
          >
            <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">Trusted by</p>
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={staggerContainerVariants}
            >
              {partnerLogos.map((logo) => (
                <motion.div
                  key={logo.name}
                  variants={staggerChildVariants}
                  className="transform transition-all duration-300 hover:scale-125 hover:drop-shadow-lg"
                >
                  <img
                    alt={logo.name}
                    src={logo.dark}
                    className="h-8 w-auto object-contain opacity-60 brightness-0 invert transition-all duration-300 hover:opacity-100"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection