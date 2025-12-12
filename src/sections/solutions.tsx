import Image from 'next/image'

export function SolutionSection() {
  const cards = [
    {
      number: 1,
      title: 'Connect your',
      highlight: 'feeds',
      image: '/Untitled-1Artboard 1.png',
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
      image: '/Spectra_AssetsArtboard 2@2x.png',
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
      image: '/Spectra_AssetsArtboard 2@2x.png',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
  ]

  const miniCards = [
    {
      id: "a",
      title: 'Inspection & Asset Health',
      image: '/AdobeStock_436346023.jpeg',
      body: 'Find issues early and keep assets running',
      subline:"..." 
    },
    { id: "b", title: 'Operations Optimization', image: '/Untitled-1Artboard 1.png', body: 'Unblock queues and keep work moving smoothly', subline:"MTTR • Dwell time" },
    { id: "c", title: 'Security & Access Control', image: '/Untitled-1Artboard 1.png', body: "Know who's where and keep the wrong things out", subline:"Throughput •  False alarms" },
    { id: 'd', title: 'Safety & Compliance (HSE)', image: '/Untitled-1Artboard 1.png', body: "Spot unsafe situations and nudge the right behavior", subline:"Incidents •      Compliance rate" },
  ]

  return (
    <section
      id="solutions"
      className="scroll-mt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Night_SkyArtboard 3.png')" }}
    >
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">The way it works is simple</h2>
            <p className="mt-4 text-lg text-gray-400">From raw images to intelligent actions</p>
          </div>
          <div className="mt-12 flex flex-col gap-6 md:mt-16">
            {cards.map((card, index) => {
              const isOdd = index % 2 === 1

              return (
                <div
                  key={card.number}
                  className="origin-center transform-gpu rounded-xl border border-zinc-700/40 bg-zinc-900/40 p-6 hover:backdrop-blur-0 hover:scale-105 transition-all duration-500 ease-out will-change-transform hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-900/30 lg:p-10"
                >
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className={`flex w-full items-center justify-center ${isOdd ? 'lg:order-2' : 'lg:order-1'} `}>
                      <div className="relative h-48 w-full max-w-sm sm:h-56 lg:h-56">
                        <Image alt={card.title} src={card.image} fill className="object-contain" priority={index < 2} />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-center ${isOdd ? 'lg:order-1' : 'lg:order-2'} `}>
                      <div className="max-w-md text-center lg:text-left">
                        <h3 className="text-xl font-medium text-white sm:text-2xl">
                          {card.number}. {card.title} <span className="text-cyan-400">{card.highlight}</span>
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-400 sm:text-base">
                          {card.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="mt-0.5 shrink-0 text-cyan-500">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-16 mx-auto text-center">
            <h2 className="text-2xl pt-24  text-white sm:text-4xl">If It Can Be Seen, It Can Be Solved.</h2>
            <div className='mt-16 text-left'>
            <h2 className="mt-2 text-xl text-zinc-300 sm:text-2xl">Proven Use-Cases</h2>
            <h3 className="mt-1 text-lg text-zinc-400">Proof without case-study fatigue. Domains change. The framework endures.</h3>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {miniCards.map((c) => (
              <div
                key={c.id}
                className="relative min-h-[360px] overflow-hidden rounded-xl border border-zinc-700/40 bg-zinc-900/40 p-6 hover:backdrop-blur-0 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-900/30 sm:min-h-[300px]"
              >
                {/* background image */}

                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover opacity-70"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  {/* optional overlay for contrast */}
                  <div className="absolute inset-0 bg-zinc-950/40" />
                </div>

                {/* text inside card */}
                <div className="relative">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-zinc-200/90">{c.body}</p>
                  <p className="mt-2 text-sm text-zinc-200/90">{c.subline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
