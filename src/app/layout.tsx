//@ts-ignore
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { TopNavbar } from '@/components/top-navbar'

export const metadata: Metadata = {
  title: 'Mavisoft',
  description: 'Mavisoft – Software Company ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-zinc-950 text-white antialiased">
      <body className="min-h-screen">
        <TopNavbar />
        <main>{children}</main>
      </body>
    </html>
  )
}