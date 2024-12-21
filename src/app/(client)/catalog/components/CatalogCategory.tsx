import Link from 'next/link'
import { CatalogCategoryType } from '../page'
import Image from 'next/image'

interface CatalogCategoryProps {
  category: CatalogCategoryType
}

const CatalogCategory = ({ category }: CatalogCategoryProps) => {
  return (
    <Link
      href={category.href}
      className='flex flex-col items-center justify-center rounded border border-blue-200 bg-white px-1 py-2 shadow'
    >
      <Image
        src={'/categories/' + category.image}
        alt=''
        width={50}
        height={50}
        className='rounded'
      />
      <div className='text-sm font-medium'>{category.text}</div>
    </Link>
  )
}

export default CatalogCategory
