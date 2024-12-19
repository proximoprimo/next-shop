import Title from '@/components/common/Title'
import ProductImageSlider from './components/ProductImageSlider'
import Button from '@/components/common/Button'
import { PiStarFill } from 'react-icons/pi'
import ProductReviewSlider from './components/ProductReviewSlider'
import AddToFavorite from '@/features/product/components/AddToFavorite'

const SingleProductPage = () => {
  return (
    <div>
      <Title>Карточка товара</Title>
      <ProductImageSlider />
      <div className='mt-4 flex flex-wrap items-center justify-between gap-4'>
        <div className='text-xl'>10 000₽</div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1 font-bold'>
            <span>4.7</span> <PiStarFill className='text-yellow-400' />
          </div>
          <div className='h-1 w-1 rounded-full bg-black'></div>
          <div>20 000 отзывов</div>
        </div>
        <div className='grid grid-cols-[1fr,max-content] gap-4 w-full'>
          <Button className='py-2'>Добавить в корзину</Button>
          <AddToFavorite />
        </div>
      </div>
      <div className='mt-4 rounded-md border-2 border-foreground p-4'>
        <Title size='sm'>Описание</Title>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tenetur architecto perferendis ad quaerat, cupiditate dolorem
          quisquam, ab perspiciatis illum officia! Quam asperiores quisquam
          quidem vel totam sunt maiores veniam?
        </div>
      </div>
      <div className='mt-4 rounded-md border-2 border-foreground p-4'>
        <Title size='sm'>Характеристики</Title>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tenetur architecto perferendis ad quaerat, cupiditate dolorem
          quisquam, ab perspiciatis illum officia! Quam asperiores quisquam
          quidem vel totam sunt maiores veniam?
        </div>
      </div>
      <div className='mt-4'>
        <Title size='sm' className='mb-4'>
          Отзывы
        </Title>

        <ProductReviewSlider />
      </div>
    </div>
  )
}

export default SingleProductPage
