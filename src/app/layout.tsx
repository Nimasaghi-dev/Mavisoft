//@ts-ignore
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { TopNavbar } from '@/components/top-navbar'

export const metadata: Metadata = {
  title: 'YourCompany',
  description: 'YourCompany – short tagline here',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-zinc-950 text-white">
      <body className="min-h-screen">
        <TopNavbar/>
        <main className='pt-16'>{children}</main>
      </body>
    </html>
  )
}
