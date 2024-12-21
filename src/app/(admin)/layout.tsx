import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import '../globals.css'

export const metadata: Metadata = {
  title: 'NextShop',
  description: 'From idea to project',
}

const notoSans = Inter({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700'],
  variable: '--noto-sans',
})

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${notoSans.variable} antialiased`}>
        <SessionProvider>
          <main className='mx-auto min-h-screen max-w-screen-sm px-4 pb-20 pt-[72px]'>
            {children}
          </main>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  )
}
