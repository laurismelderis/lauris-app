import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lauris M',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={lexend.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
