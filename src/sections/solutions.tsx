import Image from 'next/image'

export function SolutionSection() {
  const cards = [
    {
      number: 1,
      title: 'Connect your',
      highlight: 'feeds',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 2,
      title: 'Connect your',
      highlight: 'feeds',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 3,
      title: 'Connect your',
      highlight: 'feeds',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 4,
      title: 'Connect your',
      highlight: 'feeds',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
    {
      number: 5,
      title: 'Connect your',
      highlight: 'feeds',
      items: [
        'Use the cameras you already have',
        'Add drones or handheld photos when needed',
        'Pull in other context layers (e.g., AIS) when helpful',
      ],
    },
  ]

  return (
    <section id="spectra" className="scroll-mt-20 bg-zinc-900/50 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold sm:text-4xl">The way it works is simple</h2>
        <h3 className="mt-2 text-zinc-400">From raw images to intelligent actions</h3>

        <div className="mt-12 flex flex-col gap-6">
          {cards.map((card) => (
            <div
              key={card.number}
              className="grid grid-cols-1 sm:grid-cols-[250px_1fr] gap-8 rounded-xl border border-zinc-700/40 bg-zinc-800/30 p-6 hover:border-cyan-500/30 transition-colors"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  alt="SPECTRA Cognitive Framework Diagram"
                  src="/Untitled-1Artboard 1.png"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium text-white">
                  {card.number}. {card.title} <span className="text-red-400">{card.highlight}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-base text-zinc-400">
                  {card.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}