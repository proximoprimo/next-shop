import Link from 'next/link'
import { Category as CategoryType } from './CategoryList'

interface CategoryProps {
  category: CategoryType
}

const CategoryWithIcon = ({ category }: CategoryProps) => {
  const Icon = category.icon

  return (
    <Link
      className='bg-important flex aspect-[9/12] flex-col items-center justify-center rounded text-white shadow'
      href={category.href}
    >
      <Icon className='text-4xl' />
      <span className='text-xl'>{category.text}</span>
    </Link>
  )
}

export default CategoryWithIcon
