import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Каламбур.nl - Ваш любимый портал!',
  description: 'Каламбур.nl - новости, астрология, объявления и многое другое! Лучший портал рунета с 2004 года.',
}

export const viewport: Viewport = {
  themeColor: '#ffb74d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
