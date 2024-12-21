'use client'
import Title from '@components/common/Title'
import ProductCard from './ProductCard'
import Slider from '@/components/common/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { File, Product } from '@prisma/client'

interface ProductListProps {
  title: string
  products: (Product & { images: File[] })[]
}

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div>
      <Title size='lg' important={true} className='py-2'>
        {title}
      </Title>

      <Slider>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className='flex h-full w-full items-center justify-center rounded bg-foreground text-center text-2xl font-bold text-white'>
            Смотреть больше
          </div>
        </SwiperSlide>
      </Slider>
    </div>
  )
}

export default ProductList
