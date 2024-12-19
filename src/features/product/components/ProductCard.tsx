import Image from 'next/image'
import AddToFavorite from './AddToFavorite'

const ProductCard = () => {
  return (
    <div className='w-full'>
      <Image
        className='rounded w-full'
        src={'/product/card.png'}
        width={150}
        height={150}
        alt=''
      />
      <span className='line-clamp-2 overflow-ellipsis font-medium text-gray-700'>
        Карточка товара Карточка товара
      </span>
      <div className='font-bold text-[#43A047]'>10 700₽</div>
      <div className='flex gap-1'>
        <button className='w-full rounded bg-foreground p-1 text-sm font-medium text-white'>
          В корзину
        </button>
        <AddToFavorite className='h-7 w-7 border text-base' />
      </div>
    </div>
  )
}

export default ProductCard
