import { auth } from '@/auth'
import CategoryList from '@/features/product/components/CategoryList'
import ProductSlider from '@/features/product/components/ProductSlider'
import { ProductService } from '@/services/product.service'

export default async function Home() {
  const session = await auth()
  const products = await ProductService.find({
    userId: session?.user?.id,
  })

  return (
    <div className='flex flex-col gap-6'>
      {/* <ProductList title='Специально для вас' /> */}
      {/* <ProductList title='Действует скидка' /> */}
      <ProductSlider products={products} title='Популярно сейчас' />
      <CategoryList />
    </div>
  )
}
