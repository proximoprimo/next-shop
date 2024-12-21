import CategoryList from '@/features/product/components/CategoryList'
import ProductList from '@/features/product/components/ProductList'
import { ProductService } from '@/services/product.service'

export default async function Home() {
  const products = await ProductService.find()

  return (
    <div className='flex flex-col gap-6'>
      {/* <ProductList title='Специально для вас' /> */}
      {/* <ProductList title='Действует скидка' /> */}
      <ProductList products={products} title='Популярно сейчас' />
      <CategoryList />
    </div>
  )
}
