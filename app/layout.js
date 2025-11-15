import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'James Adams - Portfolio',
  description: 'Professional portfolio of James Adams, a freelancer specializing in digital programming and design',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased bg-[#272833] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
