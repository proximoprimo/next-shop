import { HEADER_LINKS } from '@libs/constants'
import MobileMenuLink from './MobileMenuLink'
import { auth } from '@/auth'

const MobileMenu = async () => {
  const session = await auth()
  const user = session?.user
  const filteredLinks = HEADER_LINKS.filter(
    (link) => (link.auth && user) || !link.auth
  )

  return (
    <div
      className='fixed bottom-0 z-20 grid w-full rounded-t-xl border-t border-foreground bg-foreground py-2 pt-3 text-white sm:hidden'
      style={{
        gridTemplateColumns: `repeat(${filteredLinks.length}, 1fr)`,
      }}
    >
      {filteredLinks.map((link) => (
        <MobileMenuLink key={link.href} item={link} />
      ))}
    </div>
  )
}

export default MobileMenu
