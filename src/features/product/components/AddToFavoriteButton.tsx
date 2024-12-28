'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import useFavorite from '../hooks/useFavorite'

interface AddToFavoriteProps {
  className?: string
  defaultIsFavorite?: boolean
  productId: string
}

const AddToFavoriteButton = ({
  defaultIsFavorite,
  className,
  productId,
}: AddToFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(() => defaultIsFavorite ?? false)
  const favorite = useFavorite()

  const handleFavorite = async () => {
    if (isFavorite) {
      setIsFavorite(false)
      favorite.remove(productId).catch(() => {
        setIsFavorite(true)
      })
    } else {
      setIsFavorite(true)
      favorite.add(productId).catch(() => {
        setIsFavorite(false)
      })
    }
  }

  return (
    <button
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-md border-2 border-foreground bg-white text-2xl text-foreground',
        {
          'pointer-events-none': favorite.isPending,
        },
        className
      )}
      disabled={favorite.isPending}
      onClick={handleFavorite}
    >
      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  )
}

export default AddToFavoriteButton
