'use client'

import { LegalModal } from '@/components/legal-modal'
import type { ArticleItem } from '@/types/footer'

interface ArticleDetailModalProps {
  open: boolean
  onClose: () => void
  article: ArticleItem | null
  variant?: 'standard' | 'rich'
  modalTitle?: string
}

export function ArticleDetailModal({
  open,
  onClose,
  article,
  variant = 'standard',
  modalTitle = 'Article',
}: ArticleDetailModalProps) {
  if (!article) {
    return (
      <LegalModal open={open} onClose={onClose} title={modalTitle}>
        <p className="text-zinc-400">No article selected.</p>
      </LegalModal>
    )
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Determine if we should show video or image
  const hasVideo = article.video && article.video.length > 0

  // Use detailImage if available, otherwise fallback to image
  const displayImage = article.detailImage || article.image

  return (
    <LegalModal open={open} onClose={onClose} title={modalTitle}>
      <article className="space-y-6">
        {/* Featured Media: Video or Image */}
        <figure>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30">
            <div className="aspect-video w-full">
              {hasVideo ? (
                <video src={article.video} className="h-full w-full object-cover" controls playsInline />
              ) : (
                <img src={displayImage} alt={article.title} className="h-full w-full object-cover" loading="lazy" />
              )}
            </div>
          </div>
          {/* Image Caption */}
          {article.detailImageCaption && (
            <figcaption className="mt-3 text-center text-sm text-zinc-500 italic">
              {article.detailImageCaption}
            </figcaption>
          )}
        </figure>

        {/* Header */}
        <header className="space-y-3">
          {/* Category & Read Time */}
          {variant === 'rich' ? (
            <div className="flex flex-wrap items-center gap-2">
              {article.category && (
                <span className="inline-block text-xs font-medium tracking-wide text-zinc-400 uppercase">
                  {article.category}
                </span>
              )}
              {article.readTime && (
                <>
                  <span className="text-zinc-600">•</span>
                  <span className="text-sm text-zinc-500">{article.readTime}</span>
                </>
              )}
            </div>
          ) : (
            article.category && (
              <span className="inline-block text-xs font-medium tracking-wide text-zinc-400 uppercase">
                {article.category}
              </span>
            )
          )}

          {/* Title */}
          <h1 className="text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl">{article.title}</h1>

          {/* Author & Date */}
          {variant === 'rich' ? (
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              {article.author && (
                <>
                  <span className="font-medium">{article.author}</span>
                  <span>•</span>
                </>
              )}
              <time dateTime={article.date}>{formattedDate}</time>
            </div>
          ) : (
            <time dateTime={article.date} className="block text-sm text-zinc-400">
              {formattedDate}
            </time>
          )}
        </header>

        {/* Content */}
        <div className="space-y-6 border-t border-white/5 pt-6">
          {article.content.map((block, idx) => (
            <section key={idx} className="space-y-4">
              {block.h2 && (
                <h2
                  className={`text-xl text-white ${variant === 'rich' ? 'mt-8 font-bold first:mt-0' : 'font-semibold'}`}
                >
                  {block.h2}
                </h2>
              )}
              {block.h3 && (
                <h3 className={`text-lg text-zinc-100 ${variant === 'rich' ? 'mt-6 font-semibold' : 'font-semibold'}`}>
                  {block.h3}
                </h3>
              )}
              {block.h4 && (
                <h4
                  className={`text-base text-zinc-200 ${variant === 'rich' ? 'mt-4 font-semibold' : 'font-semibold'}`}
                >
                  {block.h4}
                </h4>
              )}

              {/* Paragraphs */}
              {block.paragraphs && block.paragraphs.length > 0 && (
                <div className="space-y-4">
                  {block.paragraphs.map((p, pIdx) =>
                    p ? (
                      <p key={pIdx} className="text-sm leading-7 text-zinc-300">
                        {p}
                      </p>
                    ) : null
                  )}
                </div>
              )}

              {/* List */}
              {block.list && block.list.length > 0 && (
                <ul className="ml-4 list-disc space-y-2 text-sm leading-7 text-zinc-300">
                  {block.list.map((item, listIdx) => (
                    <li key={listIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Link */}
              {block.link && (
                <p className="text-sm leading-7 text-zinc-300">
                  {block.link.text}{' '}
                  <a
                    href={block.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline transition-colors hover:text-cyan-300"
                  >
                    {block.link.label}
                  </a>
                </p>
              )}
                            {/* Content Image */}
              {block.image && (
                <figure className="my-6">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/30">
                    <img
                      src={block.image}
                      alt={block.imageCaption || ''}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {block.imageCaption && (
                    <figcaption className="mt-3 text-center text-sm text-zinc-500 italic">
                      {block.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}

            </section>
          ))}
        </div>
      </article>
    </LegalModal>
  )
}
