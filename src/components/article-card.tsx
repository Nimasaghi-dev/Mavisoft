import type { ArticleItem } from '@/types/footer'

interface ArticleCardProps {
  item: ArticleItem
  onReadMore: (item: ArticleItem) => void
  variant?: 'standard' | 'compact'
}

export function ArticleCard({ item, onReadMore, variant = 'standard' }: ArticleCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: variant === 'compact' ? 'short' : 'long',
    day: 'numeric',
  })

  // Determine if we should show video or image
  const hasVideo = item.video && item.video.length > 0

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/30 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-black/20">
      {/* Media: Video or Image */}
      <div className="aspect-video w-full overflow-hidden">
        {hasVideo ? (
          <video
            src={item.video}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover "
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex h-full flex-col p-4">
        {/* Category & Read Time */}
        <div className="mb-2 flex items-center gap-2">
          {item.category && (
            <span className="inline-block text-xs font-medium uppercase tracking-wide text-zinc-400">
              {item.category}
            </span>
          )}
          {variant === 'compact' && item.readTime && (
            <>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">{item.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold leading-snug text-white">
          {item.title}
        </h3>

        {/* Meta: Author & Date */}
        <div className="mt-1.5 flex items-center gap-2 text-xs text-zinc-500">
          {variant === 'compact' && item.author && (
            <>
              <span>{item.author}</span>
              <span>•</span>
            </>
          )}
          <time dateTime={item.date}>{formattedDate}</time>
        </div>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {item.excerpt}
        </p>

        {/* Read More Button */}
        <div className="mt-auto pt-2.5">
          <button
            type="button"
            onClick={() => onReadMore(item)}
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            Read full article
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}