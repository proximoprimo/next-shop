import Title from '@/components/common/Title'
import Image from 'next/image'

const Review = () => {
  return (
    <div className='border-2 border-foreground bg-white rounded-md p-4'>
      <Title size='sm'>
        Сергей Владимирович
      </Title>
      <div>
        Текст Отзыва Текст Отзыва Текст Отзыва Текст Отзыва Текст Отзыва Текст
        Отзыва Текст Отзыва
      </div>
      <div className='flex mt-4 gap-1 opacity-70'>
        <Image className='rounded-md' width={50} height={50} src='/categories/clothes.png' alt='' />
        <Image className='rounded-md' width={50} height={50} src='/categories/electronic.png' alt='' />
        <Image className='rounded-md' width={50} height={50} src='/categories/food.png' alt='' />
        <Image className='rounded-md' width={50} height={50} src='/categories/house-hold.png' alt='' />
      </div>
    </div>
  )
}

export default Review
