import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { StoreProvider } from '../store/StoreProvider'
import { ClerkProvider } from '@clerk/nextjs'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
  keywords: ['Lauris', 'Melderis', 'Lauris Melderis', 'Profile', 'Portfolio'],
  title: { default: 'Lauris Melderis', template: '%s | Lauris Melderis' },
  description: 'Personal Lauris Melderis website.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: 'hidden',
        },
      }}
    >
      <StoreProvider>
        <html lang='en'>
          <body className={lexend.className}>
            <Header />
            <div className='relative py-8'>{children}</div>
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  )
}
