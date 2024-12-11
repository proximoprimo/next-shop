import { HEADER_LINKS } from '@libs/constants'
import MobileMenuLink from './MobileMenuLink'

const MobileMenu = () => {
  return (
    <div className='fixed bottom-0 z-20 grid w-full grid-cols-4 rounded-t-xl border-t border-foreground bg-foreground py-2 pt-3 text-white sm:hidden'>
      {HEADER_LINKS.map((link) => (
        <MobileMenuLink key={link.href} item={link} />
      ))}
    </div>
  )
}

export default MobileMenu
