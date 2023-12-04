import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'
import Analytics from './../components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Merci | Nicolas-castera.fr',
  description: "Merci de votre confiance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="logo/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}><Analytics />{children}</body>
    </html>
  )
}