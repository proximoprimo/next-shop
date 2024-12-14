import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@components/layout/Header'
import MobileMenu from '@components/layout/MobileMenu'

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
        <Header />
        <main className='px-4 pt-[72px] pb-20 max-w-screen-sm mx-auto min-h-screen'>{children}</main>
        <MobileMenu />
      </body>
    </html>
  )
}
