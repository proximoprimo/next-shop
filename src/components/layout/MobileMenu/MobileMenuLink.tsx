import Link from 'next/link'
import { IconType } from 'react-icons'

export interface MenuItem {
  icon: IconType
  text: string
  href: string
}

interface MobileMenuLinkProps {
  item: MenuItem
}

const MobileMenuLink = ({ item }: MobileMenuLinkProps) => {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className='flex flex-col items-center justify-center'
    >
      <Icon className='text-2xl' />
      <div className='text-sm font-extralight'>{item.text}</div>
    </Link>
  )
}

export default MobileMenuLink
