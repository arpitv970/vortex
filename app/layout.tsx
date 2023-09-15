import '@/styles/global.css'
import Navbar from '@/components/Navbar'

import type { Metadata } from 'next'

export const metadata = {
  title: 'Vortex',
  description: 'Spiral down your daily hassel in your own productivity manager.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
