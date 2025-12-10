const VisionSection = () => {
  const cards = [
    {
      logo: "https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg",
      logoDark: "https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg",
      title: "Perception",
      description:
        "Understanding the world through multi-modal sensing, transforming raw signals into meaningful representations.",
    },
    {
      logo: "https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg",
      logoDark: "https://tailwindcss.com/plus-assets/img/logos/reform-logo-white.svg",
      title: "Structure",
      description:
        "Organizing complexity into coherent frameworks that reveal underlying patterns and relationships.",
    },
    {
      logo: "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
      logoDark: "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-white.svg",
      title: "Action",
      description:
        "Extracting actionable insights from structured data to drive intelligent decision-making.",
    },
  ]

  const partnerLogos = [
    {
      name: "Tuple",
      light: "https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg",
      dark: "https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg",
    },
    {
      name: "Reform",
      light: "https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg",
      dark: "https://tailwindcss.com/plus-assets/img/logos/reform-logo-white.svg",
    },
    {
      name: "SavvyCal",
      light: "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
      dark: "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-white.svg",
    },
    {
      name: "Laravel",
      light: "https://tailwindcss.com/plus-assets/img/logos/laravel-logo-gray-900.svg",
      dark: "https://tailwindcss.com/plus-assets/img/logos/laravel-logo-white.svg",
    },
    {
      name: "Transistor",
      light: "https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg",
      dark: "https://tailwindcss.com/plus-assets/img/logos/transistor-logo-white.svg",
    },
    {
      name: "Statamic",
      light: "https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg",
      dark: "https://tailwindcss.com/plus-assets/img/logos/statamic-logo-white.svg",
    },
  ]

  return (
    <section id="vision" className="scroll-mt-24">
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header - Left Aligned */}
          <div className="max-w-2xl">
            <h2 className="text-4xl tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              The World Is Complex, Dynamic, Interdepended.
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              We build general-purpose perception that binds reality into
              structure and meaning.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
              >
                {/* Card Header: Logo (left) + Title (center) */}
                <div className="flex items-center gap-4">
                  {/* Logo - Top Left */}
                  <div className="flex-shrink-0">
                    <img
                      src={card.logo}
                      alt=""
                      className="h-6 w-auto dark:hidden"
                    />
                    <img
                      src={card.logoDark}
                      alt=""
                      className="hidden h-6 w-auto dark:block"
                    />
                  </div>

                  {/* Title - Positioned toward center */}
                  <h3 className="flex-1 text-center text-lg font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>

                  {/* Spacer to balance the logo width */}
                  <div className="w-6 flex-shrink-0" />
                </div>

                {/* Card Content - Left Aligned */}
                <p className="mt-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-gray-200/50 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700/50" />
              </div>
            ))}
          </div>

          {/* Partner Logos Row */}
          <div className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-700">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Trusted by industry leaders
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {partnerLogos.map((logo) => (
                <div key={logo.name}>
                  <img
                    alt={logo.name}
                    src={logo.light}
                    className="h-8 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:hidden"
                  />
                  <img
                    alt={logo.name}
                    src={logo.dark}
                    className="hidden h-8 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:block"
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