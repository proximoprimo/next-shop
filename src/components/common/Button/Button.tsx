import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface Button
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button = ({ children, className, ...btnProps }: Button) => {
  return (
    <button
      className={cn(
        'w-full rounded bg-foreground p-1 text-sm font-medium text-white',
        className
      )}
      {...btnProps}
    >
      {children}
    </button>
  )
}

export default Button
