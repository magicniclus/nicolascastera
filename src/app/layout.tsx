import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Analytics from './components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicolas Castera - Expert Google Ads | Publicité et Marketing Digital',
  description: "Boostez votre visibilité en ligne avec Nicolas Castera, votre expert en Google Ads. Découvrez des stratégies publicitaires personnalisées pour maximiser le ROI et accroître votre présence numérique efficacement.",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="logo/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
          <Analytics />
        {children}
        </body>
    </html>
  )
}
