import Image from 'next/image'

const ProductCard = () => {
  return (
    <div>
      <Image
        className='rounded'
        src={'/product/card.png'}
        width={150}
        height={150}
        alt=''
      />
      <span className='font-medium text-gray-700 overflow-ellipsis line-clamp-2'>Карточка товара Карточка товара</span>
      <div className='text-[#43A047] font-bold'>10 700₽</div>
      <button className='w-full rounded bg-foreground p-1 text-sm font-medium text-white'>
        Добавить в корзину
      </button>
    </div>
  )
}

export default ProductCard
