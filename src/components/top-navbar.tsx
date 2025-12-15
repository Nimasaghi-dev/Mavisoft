'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Logo } from '@/app/logo'
import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { Navbar, NavbarSection, NavbarSpacer } from '@/components/navbar'

// ANCHOR links
const menuItems = [
  { label: 'VISION', href: '#vision' },
  { label: 'SPECTRA', href: '#spectra' },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'INDUSTRIES', href: '#industries' },
  { label: 'CONTACT', href: '#contact' },
]

export function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Helper functions 
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="animate-fadeSlide fixed top-0 right-0 left-0 z-50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar>
          <NavbarSection>
            <Link href="/">
              <Logo className="h-8" />
            </Link>
          </NavbarSection>
          
          <NavbarSpacer />

          <NavbarSection className="hidden items-center gap-1 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:text-cyan-100 after:absolute after:right-3 after:bottom-1 after:left-3 after:h-px after:scale-x-0 after:bg-cyan-200 after:opacity-0 after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </NavbarSection>

          <NavbarSpacer />

          <NavbarSection className="hidden md:flex">
            <Button
              className="group rounded-lg! border! border-cyan-500/30! px-4! py-2.5! text-sm! font-medium! text-cyan-100! shadow-sm! shadow-cyan-500/10! transition-all! duration-300! hover:border-cyan-200! hover:bg-cyan-500/10! hover:text-cyan-100! hover:shadow-md! hover:shadow-cyan-500/20!"
              href="/login"
              outline
            >
              Login
            </Button>
            <Button
              className="group rounded-lg! border! border-cyan-500/30! px-4! py-2.5! text-sm! font-medium! text-cyan-100! shadow-sm! shadow-cyan-500/10! transition-all! duration-300! hover:border-cyan-200! hover:bg-cyan-500/10! hover:text-cyan-100! hover:shadow-md! hover:shadow-cyan-500/20!"
              href="/request-access"
              outline
            >
              Request Access
            </Button>
          </NavbarSection>

          {/* NEW: Hamburger Button (Mobile Only)         */}
          <button
            onClick={toggleMenu}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {/* Animated hamburger icon - transforms to X */}
            <div className="flex h-5 w-6 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </Navbar>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - closes menu when clicked */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur-lg md:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                {/* Menu Links */}
                <ul className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-cyan-200"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="my-4 border-t border-white/10" />

                {/* Mobile Buttons */}
                <div className="flex flex-col gap-3 px-4">
                  <a
                    href="/login"
                    onClick={closeMenu}
                    className="flex items-center justify-center rounded-lg border border-cyan-500/30 px-4 py-2.5 text-sm font-medium text-cyan-100 transition-colors hover:bg-cyan-500/10"
                  >
                    Login
                  </a>
                  <a
                    href="/request-access"
                    onClick={closeMenu}
                    className="flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
                  >
                    Request Access
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}