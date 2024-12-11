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
      </Slider>
    </div>
  )
}

export default ProductList
