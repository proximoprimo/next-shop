import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@components/layout/Header'
import MobileMenu from '@components/layout/MobileMenu'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

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
    <html lang='en'>
      <body className={`${notoSans.variable} antialiased`}>
        <SessionProvider>
          <Header />
          <main className='mx-auto min-h-screen max-w-screen-sm px-4 pb-20 pt-[72px]'>
            {children}
          </main>
          <MobileMenu />
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  )
}
