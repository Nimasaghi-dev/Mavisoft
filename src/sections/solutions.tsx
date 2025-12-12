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
      image: '/image2.png',
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
      image: '/image5.png',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
  ]

  const miniCards = [
    { id: 'a', title: '...', image: '/...', body: '...' },
    { id: 'b', title: '...', image: '/...', body: '...' },
    { id: 'c', title: '...', image: '/...', body: '...' },
    { id: 'd', title: '...', image: '/...', body: '...' },
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
                  className="origin-center transform-gpu rounded-xl border border-zinc-700/40 bg-zinc-900/40 p-6 backdrop-blur-[2px] transition-all duration-500 ease-out will-change-transform hover:scale-105 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-900/30 lg:p-10"
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
        </div>
      </div>
    </section>
  )
}
