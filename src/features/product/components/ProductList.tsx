'use client'
import Title from '@components/common/Title'
import ProductCard from './ProductCard'
import Slider from '@/components/common/Slider/Slider'
import { SwiperSlide } from 'swiper/react'

interface ProductListProps {
  title: string
}

const ProductList = ({ title }: ProductListProps) => {
  return (
    <div>
      <Title size='lg' important={true} className='py-2'>
        {title}
      </Title>
      
      <Slider>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
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
