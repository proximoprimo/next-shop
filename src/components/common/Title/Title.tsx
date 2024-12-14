import { cn } from '@utils/cn'
import { PropsWithChildren } from 'react'

interface TitleProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg'
  important?: boolean
  className?: string
}

const Title = ({
  important = false,
  size = 'md',
  children,
  className,
}: TitleProps) => {
  return (
    <div
      className={cn(
        'text-xl font-medium',
        {
          'text-2xl font-bold': size === 'lg',
          'text-lg': size === 'sm',
          'text-important': important,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Title
