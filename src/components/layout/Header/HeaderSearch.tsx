'use client'
import StyledLink from '@/components/common/StyledLink'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const HeaderSearch = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className='fixed left-1/2 top-4 z-20 w-11/12 -translate-x-1/2 grid grid-cols-[1fr,auto] gap-2'>
      <div
        className={cn(
          'grid grid-cols-[auto,1fr] items-center rounded-xl border-2 border-foreground bg-white p-1 text-lg',
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
          className={cn('px-1 text-center outline-none', {
            'text-left': isFocused || value,
          })}
        />
      </div>
      <StyledLink href='/auth/login' className='flex justify-center items-center px-3 font-medium'>Войти</StyledLink>
    </div>
  )
}

export default HeaderSearch
