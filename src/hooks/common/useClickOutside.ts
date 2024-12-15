import { useEffect, useRef } from 'react'

const useClickOutside = (cb: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb()
      }
    }

    // Add event listener for click events
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [cb])

  return ref
}

export default useClickOutside;
