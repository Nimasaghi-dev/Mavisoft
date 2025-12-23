'use client'

import { LegalModal } from '@/components/legal-modal'
import type { ArticleItem } from '@/types/footer'

interface ArticleDetailModalProps {
  open: boolean
  onClose: () => void
  article: ArticleItem | null
  /**
   * Controls header layout and heading styles
   * - 'standard': Simple category + date layout (for press)
   * - 'rich': Shows readTime, author, enhanced heading spacing (for blog)
   */
  variant?: 'standard' | 'rich'
  /**
   * Modal title shown in header bar
   */
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

  return (
    <LegalModal open={open} onClose={onClose} title={modalTitle}>
      <article className="space-y-6">
        {/* Featured Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30">
          <div className="aspect-video w-full">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Header */}
        <header className="space-y-3">
          {/* Category & Read Time */}
          {variant === 'rich' ? (
            <div className="flex flex-wrap items-center gap-2">
              {article.category && (
                <span className="inline-block text-xs font-medium uppercase tracking-wide text-zinc-400">
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
              <span className="inline-block text-xs font-medium uppercase tracking-wide text-zinc-400">
                {article.category}
              </span>
            )
          )}

          {/* Title */}
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {article.title}
          </h1>

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
              {/* Headings */}
              {block.h2 && (
                <h2
                  className={`text-xl text-white ${
                    variant === 'rich'
                      ? 'mt-8 font-bold first:mt-0'
                      : 'font-semibold'
                  }`}
                >
                  {block.h2}
                </h2>
              )}
              {block.h3 && (
                <h3
                  className={`text-lg text-zinc-100 ${
                    variant === 'rich' ? 'mt-6 font-semibold' : 'font-semibold'
                  }`}
                >
                  {block.h3}
                </h3>
              )}
              {block.h4 && (
                <h4
                  className={`text-base text-zinc-200 ${
                    variant === 'rich' ? 'mt-4 font-semibold' : 'font-semibold'
                  }`}
                >
                  {block.h4}
                </h4>
              )}

              {/* Paragraphs */}
              <div className="space-y-4">
                {block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm leading-7 text-zinc-300">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </LegalModal>
  )
}