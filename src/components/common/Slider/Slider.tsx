'use client'
import { cn } from '@/utils/cn'
import { PropsWithChildren } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper } from 'swiper/react'

interface SliderProps extends PropsWithChildren {
  className?: string
  swiperOptions?: React.ComponentProps<typeof Swiper>
}

const Slider = ({ children, className, swiperOptions }: SliderProps) => {
  return (
    <div className={cn('relative mx-2', className)}>
      <Swiper
        wrapperClass='w-full h-full'
        slidesPerView={'auto'}
        navigation={true}
        modules={[Navigation]}
        className='custom-slider'
        spaceBetween={15}
        centeredSlides={true}
        initialSlide={1}
        {...swiperOptions}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Slider
