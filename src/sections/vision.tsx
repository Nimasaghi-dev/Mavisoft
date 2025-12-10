const VisionSection = () => {
  const cards = [
    {
      logo: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg',
      logoDark: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg',
      title: 'Perception',
      description:
        'Understanding the world through multi-modal sensing, transforming raw signals into meaningful representations.',
    },
    {
      logo: 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg',
      logoDark: 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-white.svg',
      title: 'Structure',
      description:
        'Organizing complexity into coherent frameworks that reveal underlying patterns and relationships.',
    },
    {
      logo: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
      logoDark: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-white.svg',
      title: 'Action',
      description:
        'By leveraging AI models and detections, we can use those results to create workflows, and define events that are meaningful to us, and allow us to operate more efficiently as companies and as people.',
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
    <section id="vision" className="scroll-mt-26 ">
      {/* Very dark background - near black (#0a0a0a / gray-950) */}
      <div className="bg-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header - Left Aligned */}
          <div className="max-w-2xl">
            <h2 className="text-4xl tracking-tight text-pretty text-white sm:text-5xl">
              The World Is Complex, Dynamic, Interdepended.
            </h2>
            <p className="mt-6 text-lg/8 text-gray-400">
              We build general-purpose perception that binds reality into structure and meaning.
            </p>
          </div>

          {/* Cards Grid - Smaller cards with reduced padding */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative border border-gray-800 bg-gray-900/50 p-5 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/80"
              >
                {/* Card Header: Logo (left) + Title (center) */}
                <div className="flex items-center gap-4">
                  {/* Logo - Increased size (h-6 → h-10) */}
                  <div className="flex-shrink-0">
                    <img src={card.logo} alt="" className="h-10 w-auto dark:hidden" />
                    <img src={card.logoDark} alt="" className="hidden h-10 w-auto dark:block" />
                  </div>

                  {/* Title - Positioned toward center */}
                  <h3 className="flex-1 text-center text-xl  text-white">
                    {card.title}
                  </h3>

                  {/* Spacer to balance the logo width */}
                  <div className="w-10 flex-shrink-0" />
                </div>

                {/* Card Content - Left Aligned */}
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partner Logos Row */}
          <div className="mt-14  border-gray-800 pt-10">
            {/* "Trusted by" - Left Aligned */}
            <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
              Trusted by
            </p>
            {/* Logos - Left Aligned with increased size (h-8 → h-10) */}
            <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
              {partnerLogos.map((logo) => (
                <div key={logo.name}>
                  <img
                    alt={logo.name}
                    src={logo.light}
                    className="h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:hidden"
                  />
                  <img
                    alt={logo.name}
                    src={logo.dark}
                    className="hidden h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection