import { cn } from '@/utils/cn'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface Button extends PropsWithChildren {
  className?: string
  href: string
  important?: boolean
}

const StyledLink = ({ children, className, href, important }: Button) => {
  return (
    <Link
      href={href}
      className={cn(
        'w-full rounded bg-foreground p-1 text-sm font-medium text-white text-center',
        {
          'bg-important': important,
        },
        className
      )}
    >
      {children}
    </Link>
  )
}

export default StyledLink
