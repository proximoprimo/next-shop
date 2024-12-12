import { IconType } from 'react-icons'
import {
  PiBowlFoodLight,
  PiDeviceMobileLight,
  PiHouseLineLight,
  PiTShirtLight
} from 'react-icons/pi'
import Category from './Category'

export type Category = {
  text: string
  href: string
  icon: IconType
}

const CATEGORIES: Category[] = [
  {
    text: 'одежда',
    href: '/category/clothes',
    icon: PiTShirtLight,
  },
  {
    text: 'электроника',
    href: '/catgory/electronics',
    icon: PiDeviceMobileLight,
  },
  {
    text: 'еда',
    icon: PiBowlFoodLight,
    href: '/category/food',
  },
  {
    text: 'Бытовые товары',
    href: '/category/house',
    icon: PiHouseLineLight,
  },
]

const CategoryList = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
      {CATEGORIES.map((category, i) => (
        <Category key={i} category={category} />
      ))}
    </div>
  )
}

export default CategoryList
