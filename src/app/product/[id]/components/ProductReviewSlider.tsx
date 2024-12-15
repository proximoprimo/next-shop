'use client'
import Slider from '@components/common/Slider/Slider'
import Review from '@features/product/components/Review'
import { SwiperSlide } from 'swiper/react'

const ProductReviewSlider = () => {
  return (
    <Slider swiperOptions={{ slidesPerView: 1 }}>
      <SwiperSlide>
        <Review />
      </SwiperSlide>
      <SwiperSlide>
        <Review />
      </SwiperSlide>
      <SwiperSlide>
        <Review />
      </SwiperSlide>
      <SwiperSlide>
        <Review />
      </SwiperSlide>
      <SwiperSlide>
        <Review />
      </SwiperSlide>
    </Slider>
  )
}

export default ProductReviewSlider
