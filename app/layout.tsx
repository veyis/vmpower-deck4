import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButtonWrapper } from '@/components/whatsapp-button-wrapper'
import type { Metadata } from 'next'
import Script from 'next/script'

import '@/styles/globals.css'

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | VM Power Decks',
    default: 'VM Power Decks - Professional Deck Building Services',
  },
  description: 'VM Power Decks offers premium deck building, outdoor living spaces, and renovation services with expert craftsmanship and quality materials.',
  metadataBase: new URL('https://www.vmpowerdecks.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'deck construction',
    'outdoor living',
    'Easton',
    'Palmer Township',
    'Pennsylvania',
    'home improvement',
    'patio design',
    'fence installation',
  ],
  authors: [{ name: 'VM Power Deck', url: '123 Palmer Park Mall S 680 Easton PA 18045' }],
  creator: 'VM Power Deck',
  publisher: 'VM Power Deck',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.vmpowerdecks.com',
    siteName: 'VM Power Decks',
    title: 'VM Power Decks - Professional Deck Building Services',
    description: 'Premium deck building, outdoor living spaces, and renovation services with expert craftsmanship and quality materials.',
    images: [
      {
        url: 'https://www.vmpowerdecks.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VM Power Decks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VM Power Decks - Professional Deck Building Services',
    description: 'Premium deck building, outdoor living spaces, and renovation services with expert craftsmanship and quality materials.',
    images: ['https://www.vmpowerdecks.com/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://www.youtube-nocookie.com' />
        <link rel='preconnect' href='https://i.ytimg.com' />
        
        {/* Preload fonts */}
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        
        {/* Preload critical hero image for LCP optimization */}
        <link
          rel="preload"
          href="/images/hero-deck-0.avif"
          as="image"
          type="image/avif"
          media="(min-width: 641px)"
        />
        <link
          rel="preload"
          href="/images/hero-deck-0.webp"
          as="image"
          type="image/webp"
          media="(min-width: 641px) and (not (supports-images: avif))"
        />
        <link
          rel="preload"
          href="/images/hero-deck-0-sm.avif"
          as="image"
          type="image/avif"
          media="(max-width: 640px)"
        />
        <link
          rel="preload"
          href="/images/hero-deck-0-sm.webp"
          as="image"
          type="image/webp"
          media="(max-width: 640px) and (not (supports-images: avif))"
        />
        
        {/* Manifest */}
        <link rel='manifest' href='/favicon/site.webmanifest' />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButtonWrapper />
        <Script
          src="https://www.google.com/recaptcha/enterprise.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
