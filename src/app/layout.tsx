import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import TanstackProvider from './(client)/TanstackProvider'
export const metadata: Metadata = {
  title: 'NextShop',
  description: 'From idea to project',
}

const notoSans = Inter({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700'],
  variable: '--noto-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${notoSans.variable} antialiased`}>
        <SessionProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  )
}
