import Providers from '@/components/Providers'
import '@/styles/globals.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js 14 Boilerplate'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
