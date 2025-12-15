// Assembled navbar (uses ui/navbar.tsx)
'use client'

import { Logo } from '@/app/logo'
import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

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
                className="group relative px-3! py-2! font-medium! transition-all! duration-300! after:absolute after:right-3 after:bottom-1 after:left-3 after:h-px after:scale-x-0 after:bg-cyan-200 after:opacity-0 after:transition-all after:duration-300 hover:bg-transparent! hover:text-cyan-100! hover:shadow-none! hover:after:scale-x-100 hover:after:opacity-100"
              >
                <a>{item.label}</a>
              </a>
            ))}
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
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
        </Navbar>
      </div>
    </header>
  )
}
