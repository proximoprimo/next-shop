import useClickOutside from '@/hooks/common/useClickOutside'
import { cn } from '@/utils/cn'
import { PropsWithChildren } from 'react'
import { IoClose } from 'react-icons/io5'

interface PopupWrapperProps extends PropsWithChildren {
  onClose: () => void
  className?: string
  bodyClassName?: string
}

const PopupWrapper = ({ onClose, className, children, bodyClassName }: PopupWrapperProps) => {
  const ref = useClickOutside(onClose)

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-30 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60',
        className
      )}
    >
      <div ref={ref} className={cn('relative bg-white p-4 text-black rounded', bodyClassName)}>
        <div onClick={onClose} className='absolute right-2 top-2'>
          <IoClose />
        </div>
        {children}
      </div>
    </div>
  )
}

export default PopupWrapper
