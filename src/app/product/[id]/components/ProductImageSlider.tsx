'use client';
import Slider from "@/components/common/Slider/Slider"
import Image from "next/image"
import { SwiperSlide } from "swiper/react"

const ProductImageSlider = () => {
  return (
    <Slider className="mt-4">
      <SwiperSlide>
        <Image
          className='rounded'
          src={'/product/card.png'}
          width={150}
          height={150}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className='rounded'
          src={'/product/card.png'}
          width={150}
          height={150}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className='rounded'
          src={'/product/card.png'}
          width={150}
          height={150}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className='rounded'
          src={'/product/card.png'}
          width={150}
          height={150}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className='rounded'
          src={'/product/card.png'}
          width={150}
          height={150}
          alt=''
        />
      </SwiperSlide>
    </Slider>
  )
}

export default ProductImageSlider
