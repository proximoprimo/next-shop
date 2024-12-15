'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import SignInButton from './SignInButton'

const HeaderSearch = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className='fixed left-1/2 top-4 z-20 grid w-11/12 -translate-x-1/2 grid-cols-[1fr,auto] gap-2'>
      <div
        className={cn(
          'grid grid-cols-[auto,1fr] items-center rounded-xl border-2 border-foreground bg-white p-1 text-lg transition',
          {
            'border-blue-600': isFocused,
          }
        )}
      >
        <CiSearch className='text-2xl' />
        <input
          placeholder={isFocused ? '' : 'поиск'}
          onInput={(e) => setValue(e.currentTarget.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn('px-1 text-center outline-none', {
            'text-left': isFocused || value,
          })}
        />
      </div>
      <SignInButton />
    </div>
  )
}

export default HeaderSearch
