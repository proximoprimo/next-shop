'use client'
import Button from '@/components/common/Button'
import useCart from '@/features/cart/hooks/useCart'
import { useState } from 'react'

interface AddToCartButtonProps {
  quantity?: number
  productId: string
}

const AddToCartButton = ({
  productId,
  quantity: defaultQuantity,
}: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(() => defaultQuantity || 0)
  const cart = useCart()

  const handleAdd = () => {
    setQuantity((prev) => prev + 1)

    cart.add(productId).catch(() => {
      setQuantity((prev) => prev - 1)
    })
  }

  const handleRemove = () => {
    setQuantity((prev) => prev - 1)
    cart.remove(productId).catch(() => {
      setQuantity((prev) => prev + 1)
    })
  }

  if (quantity) {
    return (
      <div className='grid w-full grid-cols-[28px,1fr,28px]'>
        <Button className='h-7 w-7' onClick={handleRemove}>
          -
        </Button>
        <div className='text-center'>{quantity}</div>
        <Button className='h-7 w-7' onClick={handleAdd}>
          +
        </Button>
      </div>
    )
  }

  return (
    <button
      onClick={handleAdd}
      className='w-full rounded bg-foreground p-1 text-sm font-medium text-white'
    >
      В корзину
    </button>
  )
}

export default AddToCartButton
