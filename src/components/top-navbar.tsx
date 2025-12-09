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
      fixed top-0 left-0 right-0 z-50 border-b 
      border-black bg-zinc-950/80 backdrop-blur-md">
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
          <NavbarSection className='hidden md:flex gap-1'>
            {menuItems.map((item, index) => (
              <div
                key={item.href}
                className="relative group"
                style={{
                  animation: `slideDown 0.4s ease-out ${index * 0.1}s both`
                }}
              >
                <NavbarItem href={item.href}>
                  <NavbarLabel className="relative transition-colors duration-300 group-hover:text-blue-300">
                    {item.label}
                  </NavbarLabel>
                </NavbarItem>
                
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-200 to-cyan-400 transition-all duration-300 ease-out group-hover:w-full" />
                
                {/* Subtle glow effect */}
                <span className="absolute inset-0 rounded-md bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/5" />
              </div>
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