import Image from 'next/image'

export default function IndustriesSection() {
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

  return (
    <section
      id="industries"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Mavisoft has a long standing history in various industries in the industrial sector. 
            Our solutions are built to the highest standard to serve your needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {industryCards.map((ic) => (
            <div
              key={ic.id}
              className="
                group 
                relative 
                min-h-80 
                overflow-hidden 
                rounded-xl 
                border border-white/10 
                shadow-lg shadow-black/20 
                transition-all duration-300 ease-out 
                hover:border-cyan-500/30 
                hover:shadow-xl hover:shadow-cyan-900/20
                sm:min-h-[280px]
                lg:min-h-[450px]
              "
            >
              {/* Background image */}
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={ic.image}
                  alt={ic.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Text content */}
              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className=" bg-black/40 p-4 backdrop-blur-xs">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {ic.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/90 sm:text-base">
                    {ic.body}
                  </p>
                  
                  {/* Subline list */}
                  {ic.subline.filter(Boolean).length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {ic.subline.filter(Boolean).map((item, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-2 text-xs text-zinc-300 sm:text-sm"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}