import { useState } from 'react'

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    document.body.style.overflow = ''
    setIsOpen(false)
  }

  const open = () => {
    document.body.style.overflow = 'hidden'
    setIsOpen(true)
  }

  const toggle = () => setIsOpen((prev) => !prev)

  return {
    isOpen,
    close,
    open,
    toggle,
  }
}

export default usePopup
