'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const industryCards = [
    {
      id: 'a',
      title: 'Airports & Runway',
      image: '/AdobeStock_436346023.jpeg',
      body: 'Keep runways, taxiways and aprons inspection-ready',
      subline: ['Pavement condition', 'FOD & stand checks', 'Turnaround visibility'],
    },
    {
      id: 'b',
      title: 'Ports & Containers Terminals',
      image: '/Ports-and-containers.jpeg',
      body: 'Set every quay, stack and lane in one view',
      subline: ['Container damage & flows', 'Yard congestion', 'Safety around equipment'],
    },
    {
      id: 'c',
      title: 'Warehouses & Logistics Hubs',
      image: '/warehouse.jpeg',
      body: 'Track what moves, where and how safely',
      subline: ['Loading bays & docks', 'Aisle occupancy', 'Forklift & pedestrian zones'],
    },
    {
      id: 'd',
      title: 'Energy & Industrial Assets',
      image: '/energy-industrial.jpeg',
      body: 'Stay ahead of wear in high-value infrastructure',
      subline: ['Pipeline monitoring', 'Corrosion detection', 'Thermal anomalies'],
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % industryCards.length)
  }, [industryCards.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industryCards.length) % industryCards.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section
      id="industries"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Mavisoft has a long standing history in various industries in the industrial sector. 
            Our solutions are built to the highest standard to serve your needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {industryCards.map((ic) => (
                <div
                  key={ic.id}
                  className="w-full shrink-0"
                >
                  <div
                    className="
                      relative 
                      min-h-[400px]
                      overflow-hidden 
                      border border-white/10 
                      shadow-lg shadow-black/20
                      sm:min-h-[450px]
                      lg:min-h-[500px]
                    "
                  >
                    {/* Background image */}
                    <div className="pointer-events-none absolute inset-0">
                      <Image
                        src={ic.image}
                        alt={ic.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                      />
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Text content */}
                    <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-end sm:min-h-[450px] lg:min-h-[500px]">
                      <div className="p-6 sm:p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                          {ic.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-base text-white/90 sm:text-lg">
                          {ic.body}
                        </p>
                        
                        {/* Subline list */}
                        {ic.subline.filter(Boolean).length > 0 && (
                          <ul className="mt-4 flex flex-wrap gap-3 sm:gap-4">
                            {ic.subline.filter(Boolean).map((item, idx) => (
                              <li 
                                key={idx} 
                                className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-zinc-200 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-base"
                              >
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-cyan-300/80 sm:p-3"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-cyan-300/80 sm:p-3"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Dot Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {industryCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 bg-cyan-300' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}