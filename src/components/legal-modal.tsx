'use client'

import { AnimatePresence, motion } from 'framer-motion'

interface LegalModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function LegalModal({ open, onClose, title, children }: LegalModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative z-10 flex max-h-[calc(100vh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl sm:max-h-[calc(100vh-3rem)]"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-md px-2 py-1 text-zinc-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                ✕
              </button>
            </div>

            <div
              className="min-h-0 flex-1 overflow-y-auto px-4 py-4 text-sm leading-relaxed text-zinc-300 sm:px-6 [&::-webkit-scrollbar-thumb:hover]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.18) transparent',
              }}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}