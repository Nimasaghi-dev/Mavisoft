'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ContactFormData, FormStatus } from '@/types/footer'

/**
 * ContactForm Component
 * 
 * A contact form that sends submissions to /api/contact
 * which then emails the message via Resend.
 * 
 * Features:
 * - Client-side validation
 * - Loading states
 * - Success/error feedback
 * - Accessible form controls
 */
export function ContactForm() {
  // Form data state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  
  // Form status: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState<FormStatus>('idle')
  
  // Error message to display
  const [errorMessage, setErrorMessage] = useState<string>('')

  /** Handles form submission - Sends data to the API and handles the response */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setErrorMessage('')
    setStatus('submitting')

    try {
      // Send POST request to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Parse the JSON response
      const result = await response.json()

      if (!response.ok || !result.success) {
        // Handle error response from API
        setStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
        return
      }

      // Success! Clear form and show success message
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset to idle state after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)

    } catch (error) {
      // Handle network errors or unexpected issues
      console.error('Form submission error:', error)
      setStatus('error')
      setErrorMessage('Unable to send message. Please check your connection and try again.')
    }
  }

  /** Handles input changes - Updates form data state */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Clear error when user starts typing again
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
    
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Determine if form is currently submitting
  const isSubmitting = status === 'submitting'

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-sm sm:p-8">
      <h3 className="text-lg text-white">Contact Us</h3>
      <p className="mt-2 text-sm text-zinc-400">
        Have a project in mind? We&apos;d love to hear from you.
      </p>

      {/* Success State */}
      {status === 'success' ? (
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
          
          {/* Error Message */}
          {status === 'error' && errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-red-400/30 bg-red-400/10 p-4"
            >
              <p className="text-sm text-red-400">
                ✕ {errorMessage}
              </p>
            </motion.div>
          )}

          {/* Name Field */}
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
              minLength={2}
              disabled={isSubmitting}
              className="mt-1 block w-full rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
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
              disabled={isSubmitting}
              className="mt-1 block w-full rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="you@company.com"
            />
          </div>

          {/* Message Field */}
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
              minLength={10}
              maxLength={5000}
              rows={4}
              disabled={isSubmitting}
              className="mt-1 block w-full resize-none rounded-lg border border-white/10 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50"
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
                {/* Loading Spinner */}
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