'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const HeaderSearch = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div
      className={cn(
        'fixed left-1/2 top-4 grid w-11/12 -translate-x-1/2 grid-cols-[auto,1fr] items-center rounded-xl border-2 border-foreground p-1 text-lg bg-white z-20',
        {
          'border-[#000dff]': isFocused,
        }
      )}
    >
      <CiSearch className='text-2xl' />
      <input
        placeholder={isFocused ? '' : 'поиск'}
        onInput={(e) => setValue(e.currentTarget.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn('rounded-xl px-1 text-center outline-none', {
          'text-left': isFocused || value,
        })}
      />
    </div>
  )
}

export default HeaderSearch
