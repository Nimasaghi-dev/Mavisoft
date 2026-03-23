'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  staggerChildVariants,
  scaleFadeVariants,
  viewportOptions,
  createDelayedSlideLeft,
} from '@/lib/animations'

export function SolutionSection() {
  const cards = [
    {
      number: 1,
      title: 'Connect your',
      highlight: 'feeds',
      image: '/Untitled-1Artboard 1.png',
      icon: '/Camera_Icon.svg',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 2,
      title: 'Apply the AI models',
      highlight: 'you need',
      image: '/apply_your_AI_models.png',
      icon: '/Model_Icon.svg',
      items: [
        'Pick the models you need (cracks, PPE, people, etc.).',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 3,
      title: 'See everything in',
      highlight: 'XR',
      image: '/ChatGPT Image Oct 17, 2025, 11_46_48 AM.png',
      icon: '/XR_Icon.svg',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 4,
      title: 'Automate with',
      highlight: 'workflows',
      image: '/Spectra_AssetsArtboard 2@2x.png',
      icon: '/Workflow_Icon.svg',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 5,
      title: 'Trigger actions',
      highlight: 'instantly',
      image: '/women-in-industry.png',
      icon: '/Inspection_Icon.svg',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
  ]

  const miniCards = [
    {
      id: 'a',
      title: 'Inspection & Asset Health',
      image: '/AdobeStock_436346023.jpeg',
      body: 'Find issues early and keep assets running',
      subline: 'Throughput • Unplanned downtime',
    },
    {
      id: 'b',
      title: 'Operations Optimization',
      image: '/press/airport-detailed-image.jpg',
      body: 'Unblock queues and keep work moving smoothly',
      subline: 'MTTR • Dwell time',
    },
    {
      id: 'c',
      title: 'Security & Access Control',
      image: '/press/infrascan-result.png',
      body: "Know who's where and keep the wrong things out",
      subline: 'Throughput • False alarms',
    },
    {
      id: 'd',
      title: 'Safety & Compliance (HSE)',
      image: '/press/pilot-project.jpg',
      body: 'Spot unsafe situations and nudge the right behavior',
      subline: 'Incidents • Compliance rate',
    },
  ]

  return (
    <section
      id="solutions"
      className="scroll-mt-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Night_SkyArtboard 3.png')",
      }}
    >
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={slideInLeftVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">The way it works is simple</h2>
            <p className="mt-4 text-lg text-zinc-400">From raw images to intelligent actions</p>
          </motion.div>

          {/* Main Cards */}
          <div className="mt-12 flex flex-col gap-6 md:mt-16">
            {cards.map((card) => {
              const isOddCard = card.number % 2 === 1

              return (
                <motion.div
                  key={card.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  variants={card.number % 2 === 1 ? slideInRightVariants : slideInLeftVariants}
                  className={`mx-auto max-w-5xl rounded-2xl border border-white/5 bg-zinc-900/30 p-4 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 ease-in hover:border-white/20 hover:bg-zinc-800/40 hover:shadow-lg hover:shadow-white/20 sm:rounded-3xl sm:p-5 lg:p-6 ${
                    card.number % 2 === 1 ? 'translate-x-15' : '-translate-x-15'
                  }`}
                >
                  <div className="grid grid-cols-1 items-center gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-4">
                    {/* Image */}
                    <div
                      className={`flex w-full items-center justify-center ${isOddCard ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                      <div className="relative h-40 w-full max-w-sm overflow-hidden rounded-lg border border-zinc-700/80 sm:h-44 sm:rounded-xl sm:border-2 lg:h-48">
                        {/* Icon overlay */}
                        <div className="absolute left-2 top-2 z-10 rounded-md bg-black/40 p-1 sm:left-3 sm:top-3 sm:p-1.5">
                          <Image
                            src={card.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="h-4 w-4 sm:h-5 sm:w-5"
                          />
                        </div>
                        <Image
                          alt={card.title}
                          src={card.image}
                          fill
                          className="object-cover"
                          priority={card.number <= 2}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`flex w-full items-center justify-center ${isOddCard ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                      <div className="max-w-md text-center lg:text-left">
                        <h3 className="text-xl font-medium text-white sm:text-2xl">
                          {card.number}. {card.title}{' '}
                          <span className="text-red-400">{card.highlight}</span>
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-400 sm:text-base">
                          {card.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="mt-0.5 shrink-0 text-red-500">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Middle Section */}
          <motion.div
            className="mx-auto mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={slideInLeftVariants}
          >
            <h2 className="pt-24 text-2xl text-white sm:text-4xl">
              If It Can Be Seen, It Can Be Solved.
            </h2>
          </motion.div>

          <motion.div
            className="mt-16 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={createDelayedSlideLeft(0.05)}
          >
            <h2 className="mt-2 text-xl text-zinc-300 sm:text-2xl">Proven Use-Cases</h2>
            <h3 className="mt-1 text-lg text-zinc-400">
              Proof without case-study fatigue. Domains change. The framework endures.
            </h3>
          </motion.div>

          {/* Mini Cards */}
          <motion.div
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainerVariants}
          >
            {miniCards.map((c) => (
              <motion.div
                key={c.id}
                variants={staggerChildVariants}
                className="group relative min-h-[360px] overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:border-red-200/30 hover:shadow-lg hover:shadow-white/20 sm:min-h-[300px]"
              >
                {/* Background image */}
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>

                {/* Dark gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                {/* Text content*/}
                <div className="relative z-10 flex h-full flex-col justify-center p-6">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{c.title}</h3>
                  <p className="mt-2 text-base font-medium text-white/90 drop-shadow-md">{c.body}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-300">{c.subline}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}