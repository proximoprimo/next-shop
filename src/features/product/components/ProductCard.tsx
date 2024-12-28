import { ProductService } from '@/services/product.service'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import AddToFavoriteButton from './AddToFavoriteButton'
import AddToCartButton from './AddToCartButton'

interface ProductCardProps {
  product: Awaited<ReturnType<typeof ProductService.find>>[number]
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='h-full w-full'>
      <Image
        className='h-full w-full rounded bg-white object-cover'
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
          <AddToCartButton quantity={product.cartItem?.[0]?.quantity} productId={product.id} />
          <AddToFavoriteButton
            defaultIsFavorite={product?.favorite?.length > 0}
            className={cn('h-7 w-7 border text-base')}
            productId={product.id}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
