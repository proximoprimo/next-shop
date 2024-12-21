import Title from '@/components/common/Title'
import CatalogCategory from './components/CatalogCategory'

export type CatalogCategoryType = {
  text: string
  image: string
  href: string
}

const CATALOG_CATEGORIES: CatalogCategoryType[] = [
  {
    href: 'clothes',
    image: 'clothes.png',
    text: 'Одежда',
  },
  {
    href: 'electronic',
    image: 'electronic.png',
    text: 'Электроника',
  },
  {
    href: 'house-hold',
    image: 'house-hold.png',
    text: 'Бытовые товары',
  },
  {
    href: 'food',
    image: 'food.png',
    text: 'Еда',
  },
]

const CatalogPage = () => {
  return (
    <div>
      <Title size='lg'>Каталог</Title>
      <div className='grid-cols-fill-100 grid gap-1 mt-2'>
        {CATALOG_CATEGORIES.map((cat) => (
          <CatalogCategory key={cat.text} category={cat} />
        ))}
      </div>
    </div>
  )
}

export default CatalogPage
