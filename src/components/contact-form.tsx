'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ContactFormData } from '@/types/footer'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API
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

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-sm sm:p-8">
      <h3 className="text-lg text-white">Contact Us</h3>
      <p className="mt-2 text-sm text-zinc-400">
        Have a project in mind? We&apos;d love to hear from you.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-4"
        >
          <p className="text-sm text-cyan-300">
            ✓ Thanks for reaching out! We&apos;ll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
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
            <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
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
            <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              id="contact-message"
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
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-sm shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-500/10 hover:text-cyan-100 hover:shadow-md hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
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
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  )
}