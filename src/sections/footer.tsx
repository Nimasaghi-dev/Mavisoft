'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/app/logo'
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerChildVariants,
  viewportOptions,
  createDelayedFadeUp,
} from '@/lib/animations'

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

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
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-zinc-950 p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <button
                onClick={onClose}
                className="rounded-md px-2 py-1 text-zinc-400 transition hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 max-h-[60vh] overflow-y-auto text-sm leading-relaxed text-zinc-400">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
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

  const companyLinks = [
    { label: 'About', href: '#vision' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Press', href: '#press' },
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
    {
      label: 'Twitter',
      href: 'https://twitter.com/mavisoft',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/mavisoft',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
                  <h3 className="text-sm uppercase tracking-wider text-white">Company</h3>
                  <ul className="mt-4 space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-zinc-400 transition-colors hover:text-cyan-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Product Links */}
                <motion.div variants={staggerChildVariants}>
                  <h3 className="text-sm uppercase tracking-wider text-white">Product</h3>
                  <ul className="mt-4 space-y-3">
                    {productLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-zinc-400 transition-colors hover:text-cyan-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Social Links */}
                <motion.div className="col-span-2 sm:col-span-2" variants={staggerChildVariants}>
                  <h3 className="text-sm uppercase tracking-wider text-white">Connect</h3>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-cyan-200"
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
                      <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
                      <span className="leading-relaxed">
                        Veerhaven 14<br />
                        3016 CJ Rotterdam<br />
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
                <p className="mt-2 text-sm text-zinc-400">
                  Have a project in mind? We'd love to hear from you.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-4"
                  >
                    <p className="text-sm text-cyan-300">
                      ✓ Thanks for reaching out! We'll get back to you soon.
                    </p>
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
                        className="mt-1 block w-full rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
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
                        className="mt-1 block w-full rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
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
                        className="mt-1 block w-full resize-none rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <>
                          Send Message
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </>
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
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Mavisoft. All rights reserved.
            </p>
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
      <LegalModal
          open={privacyOpen}
          onClose={() => setPrivacyOpen(false)}
          title="Privacy Policy"
        >
          <p>
            Mavisoft respects your privacy. We collect only the information necessary
            to operate and improve our services. Your data is never sold to third
            parties.
          </p>
          <p className="mt-3">
            Usage analytics, contact details, and technical identifiers may be stored
            securely to enhance platform performance.
          </p>
        </LegalModal>

        <LegalModal
          open={termsOpen}
          onClose={() => setTermsOpen(false)}
          title="Terms of Service"
        >
          <p>
            By using Mavisoft services, you agree to comply with all applicable laws and
            regulations. Services are provided “as is” without warranties.
          </p>
          <p className="mt-3">
            We reserve the right to modify, suspend, or discontinue services at any
            time without notice.
          </p>
        </LegalModal>
    </footer>
  )
}