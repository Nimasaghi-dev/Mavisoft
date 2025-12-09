// Assembled navbar (uses ui/navbar.tsx)
'use client'

import {
  Navbar,
  NavbarSection,
  NavbarSpacer,
  NavbarItem,
  NavbarLabel,
} from '@/components/navbar'
import { Logo } from '@/app/logo'
import { Link } from '@/components/link'
import { Button } from '@/components/button'

// ANCHOR links
const menuItems = [
  { label: 'Vision', href: '#vision' },
  { label: 'Spectra', href: '#spectra' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'People', href: '#people' },
  { label: 'Contact', href: '#contact' },
]

export function TopNavbar() {
  return (
    <header 
      className="animate-fadeSlide 
      fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md">
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
<NavbarSection className="hidden md:flex">
            {menuItems.map((item) => (
              <NavbarItem key={item.href} href={item.href}>
                <NavbarLabel>{item.label}</NavbarLabel>
              </NavbarItem>
            ))}
          </NavbarSection>

          <NavbarSpacer />

          {/* RIGHT: Buttons */}
          <NavbarSection>
            <Button href="/login" outline>
              Login
            </Button>
            <Button href="/request-access">
              Request Access
            </Button>
          </NavbarSection>
        </Navbar>
      </div>
    </header>
  )
}