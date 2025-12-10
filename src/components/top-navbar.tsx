// Assembled navbar (uses ui/navbar.tsx)
'use client'

import { Logo } from '@/app/logo'
import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'

// ANCHOR links
const menuItems = [
  { label: 'VISION', href: '#vision' },
  { label: 'SPECTRA', href: '#spectra' },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'PEOPLE', href: '#people' },
  { label: 'CONTACT', href: '#contact' },
]

export function TopNavbar() {
  return (
    <header className="animate-fadeSlide fixed top-0 right-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar>
          {/* LEFT: Logo */}
          <NavbarSection>
            <Link href="/">
              <Logo className="h-8" />
            </Link>
          </NavbarSection>

          <NavbarSpacer />

          {/* CENTER: Menu Items */}
          <NavbarSection className="hidden items-center gap-1 md:flex">
            {menuItems.map((item) => (
              <NavbarItem
                key={item.href}
                href={item.href}
                className="group relative
                !px-3 !py-2 !font-medium !transition-all !duration-300 after:absolute after:right-3 after:bottom-1 after:left-3 after:h-px after:scale-x-0 after:bg-cyan-200 after:opacity-0 after:transition-all after:duration-300 hover:!bg-transparent hover:!text-cyan-100 hover:!shadow-none hover:after:scale-x-100 hover:after:opacity-100"
              >
                <NavbarLabel>{item.label}</NavbarLabel>
              </NavbarItem>
            ))}
          </NavbarSection>

          <NavbarSpacer />

          {/* RIGHT: Buttons */}
          <NavbarSection>
            <Button
              className="group !rounded-lg !border !border-cyan-500/30 !px-4 !py-2.5 !text-sm !font-medium !text-cyan-100 !shadow-sm !shadow-cyan-500/10 !transition-all !duration-300 hover:!border-cyan-200 hover:!bg-cyan-500/10 hover:!text-cyan-100 hover:!shadow-md hover:!shadow-cyan-500/20"
              href="/login"
              outline
            >
              Login
            </Button>
            <Button
              className="group !rounded-lg !border !border-cyan-500/30 !px-4 !py-2.5 !text-sm !font-medium !text-cyan-100 !shadow-sm !shadow-cyan-500/10 !transition-all !duration-300 hover:!border-cyan-200 hover:!bg-cyan-500/10 hover:!text-cyan-100 hover:!shadow-md hover:!shadow-cyan-500/20"
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
