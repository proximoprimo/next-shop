'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

interface AddToFavoriteProps {
  className?: string
  onAddToFavorite: () => void
  defaultIsFavorite?: boolean
}

const AddToFavorite = ({
  className,
  onAddToFavorite,
  defaultIsFavorite,
}: AddToFavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState(() => defaultIsFavorite ?? false)

  const handleClick = () => {
    setIsFavorite((prev) => !prev)
    onAddToFavorite()
    // async () => {
    // const formData = new FormData()
    // formData.append('productId', product.id)
    // await addToFav({ status: ResponseStatus.PENDING }, formData)
    // toast.success('Товар добавлен в избранное')
    // }
  }

  return (
    <button
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-md border-2 border-foreground bg-white text-2xl text-foreground',
        className
      )}
      onClick={handleClick}
    >
      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  )
}

export default AddToFavorite
