import CategoryList from '@/features/product/components/CategoryList'
import ProductList from '@/features/product/components/ProductList'

export default function Home() {
  return (
    <div className='flex flex-col gap-6'>
      <ProductList title='Специально для вас' />
      <ProductList title='Действует скидка' />
      <ProductList title='Популярно сейчас' />
      <CategoryList />
    </div>
  )
}
