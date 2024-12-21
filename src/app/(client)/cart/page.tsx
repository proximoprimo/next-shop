import StyledLink from '@/components/common/StyledLink'
import Title from '@/components/common/Title'

const CartPage = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <Title size='lg'>Корзина</Title>

      <div className='text-xl font-medium'>Здесь пока пусто</div>

      <StyledLink className='w-max mt-4 p-4' href='/catalog'>Перейти в католог</StyledLink>
    </div>
  )
}

export default CartPage
