'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

interface AddToFavoriteProps {
  className?: string
}

const AddToFavorite = ({ className }: AddToFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setIsFavorite((prev) => !prev)
  }

  return (
    <div
      className={cn(
        'flex aspect-square items-center justify-center rounded-md border-2 border-foreground text-2xl text-foreground bg-white',
        className
      )}
      onClick={handleClick}
    >
      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </div>
  )
}

export default AddToFavorite
