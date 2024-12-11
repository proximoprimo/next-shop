'use client'
import { PropsWithChildren } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative mx-2'>
      <Swiper
        wrapperClass='w-full h-full'
        slidesPerView={'auto'}
        navigation={true}
        modules={[Navigation]}
        className='custom-slider'
        spaceBetween={15}
        centeredSlides={true}
        initialSlide={2}
      >
        {children}
        <SwiperSlide>
          <div className='flex h-full w-full items-center justify-center rounded bg-foreground text-center text-2xl font-bold text-white'>
            Смотреть больше
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
