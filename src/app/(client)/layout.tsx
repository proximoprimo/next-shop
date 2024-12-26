import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'
import { PropsWithChildren } from 'react'

const ClientLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className='mx-auto min-h-screen max-w-screen-sm px-4 pb-20 pt-[72px]'>
        {children}
      </main>
      <MobileMenu />
    </>
  )
}
export default ClientLayout
