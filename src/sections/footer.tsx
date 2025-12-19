'use client'

import { Logo } from '@/app/logo'
import {
  createDelayedFadeUp,
  fadeUpVariants,
  staggerChildVariants,
  staggerContainerVariants,
  viewportOptions,
} from '@/lib/animations'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { teamMembers } from '@/data/team-members'
import { pressItems } from '@/data/press-items'
import { blogItems } from '@/data/blog-items'

function LegalModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop captures outside clicks */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={[
              'relative z-10 w-full max-w-3xl',
              'max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)]',
              'overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl',
              'flex flex-col',
            ].join(' ')}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            // Prevent clicks inside from bubbling to backdrop
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-md px-2 py-1 text-zinc-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                ✕
              </button>
            </div>

            {/* Body (scrollable) */}
            <div
              className={[
                'min-h-0 flex-1 overflow-y-auto px-4 py-4 text-sm leading-relaxed text-zinc-300 sm:px-6',
                '[&::-webkit-scrollbar]:w-2',
                '[&::-webkit-scrollbar-track]:bg-transparent',
                '[&::-webkit-scrollbar-thumb]:rounded-full',
                '[&::-webkit-scrollbar-thumb]:bg-white/10',
                '[&::-webkit-scrollbar-thumb:hover]:bg-white/20',
              ].join(' ')}
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

type ContentBlock = {
  h2?: string
  h3?: string
  h4?: string
  paragraphs: string[]
}

type ArticleItem = {
  id: string
  title: string
  date: string
  image: string
  excerpt: string
  content: ContentBlock[]
  category?: string
  author?: string
  readTime?: string
}

export function FooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  type AboutModal = 'mission' | 'team' | null | 'about'
  const [aboutModal, setAboutModal] = useState<AboutModal>(null)

  // Press state
  const [pressOpen, setPressOpen] = useState(false)
  const [pressDetailOpen, setPressDetailOpen] = useState(false)
  const [selectedPress, setSelectedPress] = useState<ArticleItem | null>(null)

  // Blog state
  const [blogOpen, setBlogOpen] = useState(false)
  const [blogDetailOpen, setBlogDetailOpen] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<ArticleItem | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with your actual API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function openPressDetail(item: ArticleItem) {
    setSelectedPress(item)
    setPressDetailOpen(true)
  }

  function closePressDetail() {
    setPressDetailOpen(false)
    setSelectedPress(null)
  }

  function openBlogDetail(item: ArticleItem) {
    setSelectedBlog(item)
    setBlogDetailOpen(true)
  }

  function closeBlogDetail() {
    setBlogDetailOpen(false)
    setSelectedBlog(null)
  }

  const companyLinks = [
    { label: 'Careers', href: '#careers' },
  ]

  const productLinks = [
    { label: 'Spectra', href: '#spectra' },
    { label: 'Docs', href: '#docs' },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/mavisoft',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ]


  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/10 bg-zinc-950">
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Side - Logo & Links */}
            <div className="lg:col-span-7">
              <motion.div
                className="grid grid-cols-2 gap-8 sm:grid-cols-4"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={staggerContainerVariants}
              >
                {/* Company Links */}
                <motion.div variants={staggerChildVariants}>
                  <h3 className="text-sm tracking-wider text-white uppercase">Company</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="group">
                      <button
                        type="button"
                        onClick={() => setAboutModal('about')}
                        className="inline-flex w-full items-center text-left text-sm text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                        aria-haspopup="dialog"
                      >
                        About
                      </button>

                      <div className="mt-1.5 ml-3 max-h-0 overflow-hidden opacity-0 transition-all duration-200 ease-out group-focus-within:max-h-24 group-focus-within:opacity-100 group-hover:max-h-24 group-hover:opacity-100">
                        <div className="space-y-1.5 border-l border-white/10 pl-3">
                          <button
                            type="button"
                            onClick={() => setAboutModal('mission')}
                            className="block w-full text-left text-sm text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                          >
                            Mission
                          </button>

                          <button
                            type="button"
                            onClick={() => setAboutModal('team')}
                            className="block w-full text-left text-sm text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                          >
                            Team
                          </button>
                        </div>
                      </div>
                    </li>

                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <button
                        type="button"
                        onClick={() => setBlogOpen(true)}
                        className="text-sm text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                        aria-haspopup="dialog"
                      >
                        Blog
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setPressOpen(true)}
                        className="text-sm text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                        aria-haspopup="dialog"
                      >
                        Press
                      </button>
                    </li>
                  </ul>
                </motion.div>

                {/* Product Links */}
                <motion.div variants={staggerChildVariants}>
                  <h3 className="text-sm tracking-wider text-white uppercase">Product</h3>
                  <ul className="mt-4 space-y-3">
                    {productLinks.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Social Links */}
                <motion.div className="col-span-2 sm:col-span-2" variants={staggerChildVariants}>
                  <h3 className="text-sm tracking-wider text-white uppercase">Connect</h3>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-white"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Logo & Tagline */}
              <motion.div
                className="mt-12 border-t border-white/10 pt-8"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={createDelayedFadeUp(0.2)}
              >
                <a
                  href="#top"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-block"
                  aria-label="Back to top"
                >
                  <Logo className="h-8 w-auto" />
                </a>

                <ul className="mt-6 space-y-4 text-sm">
                  {/* Address */}
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Veerhaven+14+3016+CJ+Rotterdam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex max-w-xs items-start gap-3 text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                      <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
                      <span className="leading-relaxed">
                        Veerhaven 14
                        <br />
                        3016 CJ Rotterdam
                        <br />
                        Netherlands
                      </span>
                    </a>
                  </li>

                  {/* Phone */}
                  <li>
                    <a
                      href="tel:+31646563735"
                      className="group flex items-center gap-3 text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                      <PhoneIcon className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
                      <span>+31 (0) 6 46 56 37 35</span>
                    </a>
                  </li>

                  {/* Email */}
                  <li>
                    <a
                      href="mailto:sales@mavisoft.com"
                      className="group flex items-center gap-3 text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                      <EnvelopeIcon className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
                      <span>sales@mavisoft.com</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={fadeUpVariants}
            >
              <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="text-lg text-white">Contact Us</h3>
                <p className="mt-2 text-sm text-zinc-400">Have a project in mind? we'd love to hear from you.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-4"
                  >
                    <p className="text-sm text-cyan-300">✓ Thanks for reaching out! We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:ring-1 focus:ring-white/20 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:ring-1 focus:ring-white/20 focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1 block w-full resize-none rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:ring-1 focus:ring-white/20 focus:outline-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-sm shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-500/10 hover:text-cyan-100 hover:shadow-md hover:shadow-cyan-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={createDelayedFadeUp(0.3)}
          >
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Mavisoft. All rights reserved.</p>
            <div className="flex gap-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setTermsOpen(true)}
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Terms of Service
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Modals */}
      <LegalModal open={aboutModal === 'about'} onClose={() => setAboutModal(null)} title="About Mavisoft">
        <div className="space-y-4">
          <p className="text-zinc-300">
            Mavisoft is a Dutch AI company on a mission to unlock the full potential of vision. Just as the human eye
            and brain work together to make sense of the world, we build{' '}
            <span className="font-medium text-white">
              technologies that transform camera feeds into actionable intelligence.
            </span>
          </p>

          <p className="text-zinc-300">
            At the heart of our work is <span className="font-medium text-cyan-400">Spectra®</span>, our machine vision
            platform that empowers people and industries to create their own inspection and monitoring solutions. From
            airports to maritime ports and beyond, <span className="font-medium text-cyan-400">Spectra®</span> enables
            safer, smarter, and more efficient operations by turning every image into actionable insight.
          </p>

          <p className="mt-6 border-l-2 border-cyan-500/50 pl-4 text-base font-medium text-white italic">
            Mavisoft stands for the future of vision
          </p>
        </div>
      </LegalModal>

      <LegalModal open={aboutModal === 'mission'} onClose={() => setAboutModal(null)} title="Mission">
        <p>
          At Mavisoft, we're redefining how critical infrastructure is inspected and managed. By combining advanced AI
          vision, photogrammetry, and an end-to-end service platform, we help organisations move from reactive
          maintenance to confident, data-driven decisions.
        </p>

        <p className="mt-3">
          Our technology improves the safety, reliability, and sustainability of industrial assets through early damage
          detection, smarter resource allocation, and clearer performance insights—ultimately extending asset lifespan
          and reducing downtime.
        </p>
      </LegalModal>

      <LegalModal open={aboutModal === 'team'} onClose={() => setAboutModal(null)} title="Team Members">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {teamMembers.map((m) => (
            <div
              key={m.linkedin}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900/30 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={m.image}
                  alt={`${m.name} profile`}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-white/10"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-medium text-white">{m.name}</div>
                  <div className="text-xs text-zinc-400">{m.title}</div>
                </div>
              </div>

              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="rounded-md p-2 text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </LegalModal>

      {/* Press List Modal */}
      <LegalModal open={pressOpen} onClose={() => setPressOpen(false)} title="Press & Media">
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 leading-relaxed">
            Stay updated with Mavisoft's latest announcements, partnerships, and industry recognition. Explore our press
            releases and media coverage.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pressItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/30 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex h-full flex-col p-4">
                  {item.category && (
                    <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wide text-zinc-400">
                      {item.category}
                    </span>
                  )}

                  <h3 className="text-sm font-semibold text-white leading-snug transition-colors">
                    {item.title}
                  </h3>

                  <time className="mt-1.5 text-xs text-zinc-500">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">{item.excerpt}</p>

                  <div className="mt-auto pt-2.5">
                    <button
                      type="button"
                      onClick={() => openPressDetail(item)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    >
                      Read full article
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </LegalModal>

      {/* Press Detail Modal */}
      <LegalModal open={pressDetailOpen} onClose={closePressDetail} title="Press Release">
        {selectedPress && (
          <article className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30">
              <div className="aspect-video w-full">
                <img
                  src={selectedPress.image}
                  alt={selectedPress.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <header className="space-y-3">
              {selectedPress.category && (
                <span className="inline-block text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {selectedPress.category}
                </span>
              )}

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{selectedPress.title}</h1>

              <time dateTime={selectedPress.date} className="block text-sm text-zinc-400">
                {new Date(selectedPress.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </header>

            <div className="space-y-6 border-t border-white/5 pt-6">
              {selectedPress.content.map((block, idx) => (
                <section key={idx} className="space-y-4">
                  {block.h2 && <h2 className="text-xl font-semibold text-white">{block.h2}</h2>}
                  {block.h3 && <h3 className="text-lg font-semibold text-zinc-100">{block.h3}</h3>}
                  {block.h4 && <h4 className="text-base font-semibold text-zinc-200">{block.h4}</h4>}

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
        )}
      </LegalModal>

      {/* Blog List Modal */}
      <LegalModal open={blogOpen} onClose={() => setBlogOpen(false)} title="Blog & Insights">
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 leading-relaxed">
            Explore thought leadership articles, technical insights, and industry perspectives from the Mavisoft team.
            Dive deep into AI vision, infrastructure inspection, and the future of asset management.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {blogItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/30 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex h-full flex-col p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {item.category && (
                      <span className="inline-block text-xs font-medium uppercase tracking-wide text-zinc-400">
                        {item.category}
                      </span>
                    )}
                    {item.readTime && (
                      <span className="text-xs text-zinc-500">{item.readTime}</span>
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-white leading-snug transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-1.5 flex items-center gap-2 text-xs text-zinc-500">
                    {item.author && <span>{item.author}</span>}
                    {item.author && <span>•</span>}
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">{item.excerpt}</p>

                  <div className="mt-auto pt-2.5">
                    <button
                      type="button"
                      onClick={() => openBlogDetail(item)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    >
                      Read full article
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </LegalModal>

      {/* Blog Detail Modal */}
      <LegalModal open={blogDetailOpen} onClose={closeBlogDetail} title="Blog Article">
        {selectedBlog && (
          <article className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30">
              <div className="aspect-video w-full">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <header className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {selectedBlog.category && (
                  <span className="inline-block text-xs font-medium uppercase tracking-wide text-zinc-400">
                    {selectedBlog.category}
                  </span>
                )}
                {selectedBlog.readTime && (
                  <span className="text-sm text-zinc-500">{selectedBlog.readTime}</span>
                )}
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-tight">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-3 text-sm text-zinc-400">
                {selectedBlog.author && (
                  <>
                    <span className="font-medium">{selectedBlog.author}</span>
                    <span>•</span>
                  </>
                )}
                <time dateTime={selectedBlog.date}>
                  {new Date(selectedBlog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </header>

            <div className="space-y-6 border-t border-white/5 pt-6">
              {selectedBlog.content.map((block, idx) => (
                <section key={idx} className="space-y-4">
                  {block.h2 && (
                    <h2 className="text-xl font-bold text-white mt-8 first:mt-0">{block.h2}</h2>
                  )}
                  {block.h3 && (
                    <h3 className="text-lg font-semibold text-zinc-100 mt-6">{block.h3}</h3>
                  )}
                  {block.h4 && (
                    <h4 className="text-base font-semibold text-zinc-200 mt-4">{block.h4}</h4>
                  )}

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
        )}
      </LegalModal>

      {/* Legal Modals */}
      <LegalModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <p>
          At Mavisoft, we value your privacy and are committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, and safeguard information when you visit or interact with our website.
        </p>

        <p className="mt-3">
          Mavisoft B.V. operates this website at <span className="font-medium text-white">https://mavisoft.com</span>.
          References to "we", "us", or "our" refer to Mavisoft.
        </p>

        <p className="mt-3">
          When visitors interact with certain features of the website—such as leaving comments—we may collect
          information shown in the relevant forms, along with technical data like IP address and browser details. This
          information is used solely for security, moderation, and spam detection purposes.
        </p>

        <p className="mt-3">
          If you choose to upload images to the website, please be aware that images containing embedded location data
          (EXIF GPS) may allow visitors to extract that information. We recommend removing such data before uploading.
        </p>

        <p className="mt-3">
          Our website uses cookies to improve functionality and user experience. Cookies may be used to remember your
          preferences, login status, or display settings. You can control or disable cookies through your browser
          settings at any time.
        </p>

        <p className="mt-3">
          Some pages on this website may include embedded content from third-party services, such as videos or images.
          Embedded content behaves as if you have visited the external website directly and may collect data or use
          cookies according to their own privacy policies.
        </p>

        <p className="mt-3">
          We do not sell or trade your personal data. Data may be shared only when necessary for essential website
          operations, such as automated spam detection or account security (for example, during password reset
          requests).
        </p>

        <p className="mt-3">
          Personal data is retained only for as long as necessary to fulfill its purpose. Comments and related metadata
          may be stored indefinitely to allow efficient moderation. Registered users (if applicable) may view, edit, or
          delete their personal information at any time.
        </p>

        <p className="mt-3">
          You have the right to request access to the personal data we hold about you, request corrections, or ask for
          deletion where legally permitted. Certain data may be retained where required for legal, administrative, or
          security reasons.
        </p>

        <p className="mt-3">
          Visitor interactions, such as comments, may be processed through automated systems for spam prevention and
          security monitoring.
        </p>
      </LegalModal>

      <LegalModal open={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <p>
          Welcome to the Mavisoft website. By accessing or using this website, you agree to be bound by these Terms of
          Service, together with our Privacy Policy. If you do not agree with any part of these terms, you should not
          use this website.
        </p>

        <p className="mt-3">
          References to "Mavisoft", "we", or "us" refer to Mavisoft B.V., registered at Veerhaven 14, 3016 CJ Rotterdam,
          Netherlands (Company Registration No. 78596122). "You" refers to any user or visitor of this website.
        </p>

        <p className="mt-3">
          The content on this website is provided for general information purposes only and may be updated or changed at
          any time without prior notice. While we strive to keep information accurate and up to date, we make no
          warranties or guarantees regarding completeness, accuracy, or suitability for any particular purpose.
        </p>

        <p className="mt-3">
          Your use of this website and any reliance on its content is entirely at your own risk. Mavisoft shall not be
          liable for any direct or indirect damages resulting from the use of, or inability to use, this website or its
          content, to the fullest extent permitted by law.
        </p>

        <p className="mt-3">
          This website may use cookies to improve user experience and monitor site usage. By continuing to browse the
          website, you consent to the use of cookies in accordance with our Privacy Policy.
        </p>

        <p className="mt-3">
          All content on this website, including but not limited to text, visuals, layout, design, and graphics, is
          owned by or licensed to Mavisoft. Reproduction, distribution, or reuse of any material is prohibited unless
          explicitly permitted under applicable copyright laws.
        </p>

        <p className="mt-3">
          This website may contain links to third-party websites for your convenience. Mavisoft does not endorse and is
          not responsible for the content, availability, or practices of any external websites.
        </p>

        <p className="mt-3">
          Unauthorized use of this website may result in legal action and/or claims for damages. We reserve the right to
          modify, suspend, or discontinue any part of the website or services at any time without notice.
        </p>
      </LegalModal>
    </footer>
  )
}