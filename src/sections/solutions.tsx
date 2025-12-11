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

  return (
    <section
      id="solutions"
      className="scroll-mt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Night_SkyArtboard 3.png')" }}
    >
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              The way it works is simple
            </h2>
            <p className="mt-4 text-base text-gray-400">
              From raw images to intelligent actions
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 md:mt-16 flex flex-col gap-6">
            {cards.map((card, index) => {
              const isOdd = index % 2 === 1

              return (
                <div
                  key={card.number}
                  className="flex flex-col lg:flex-row items-center gap-8 rounded-xl border border-zinc-700/40 bg-zinc-900/60 backdrop-blur-sm p-6 lg:p-8 transition-colors hover:border-cyan-500/30"
                >
                  {/* Image */}
                  <div
                    className={`w-full lg:w-80 shrink-0 ${
                      isOdd ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative h-48 sm:h-56 lg:h-52">
                      <Image
                        alt={card.title}
                        src={card.image}
                        fill
                        className="object-contain"
                        priority={index < 2}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`flex-1 ${
                      isOdd ? 'lg:order-1 lg:text-right' : 'lg:order-2'
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-medium text-white">
                      {card.number}. {card.title}{' '}
                      <span className="text-cyan-400">{card.highlight}</span>
                    </h3>
                    <ul
                      className={`mt-4 space-y-2 text-sm sm:text-base text-gray-400 ${
                        isOdd ? 'lg:ml-auto' : ''
                      } max-w-md`}
                    >
                      {card.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
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