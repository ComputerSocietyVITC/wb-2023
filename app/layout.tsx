import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'IEEE Computer Society at VIT Chennai',
  description: 'IEEE Computer Society at VIT Chennai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
