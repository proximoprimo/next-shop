import ProductList from '@/features/product/components/ProductList'

export default function Home() {
  return (
    <div className='flex flex-col gap-10 pb-10'>
      <ProductList title='Специально для вас' />
      <ProductList title='Действует скидка' />
      <ProductList title='Популярно сейчас' />
    </div>
  )
}
