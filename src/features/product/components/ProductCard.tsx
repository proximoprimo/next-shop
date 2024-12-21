import Image from 'next/image'
import AddToFavorite from './AddToFavorite'
import { File, Product } from '@prisma/client'
import { useActionState } from 'react'
import addToFav from '../actions/addToFav'
import { ResponseStatus } from '@/types/next'
import { cn } from '@/utils/cn'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product & { images: File[] }
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [state, action, isPending] = useActionState(addToFav, {
    status: ResponseStatus.PENDING,
  })

  return (
    <div className='grid h-full w-full grid-rows-[187px,max-content]'>
      <Image
        className='h-full w-full rounded object-cover'
        src={product.images[0].url}
        width={product.images[0].width}
        height={product.images[0].height}
        alt=''
      />
      <div>
        <span className='line-clamp-2 overflow-ellipsis font-medium text-gray-700'>
          {product.name}
        </span>
        <div className='font-bold text-[#43A047]'>10 700₽</div>
        <div className='flex gap-1'>
          <button className='w-full rounded bg-foreground p-1 text-sm font-medium text-white'>
            В корзину
          </button>
          <AddToFavorite
            className={cn('h-7 w-7 border text-base', {
              'pointer-events-none opacity-70': isPending,
            })}
            onAddToFavorite={async () => {
              const formData = new FormData()
              formData.append('productId', product.id)
              await addToFav({ status: ResponseStatus.PENDING }, formData)
              toast.success('Товар добавлен в избранное')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
