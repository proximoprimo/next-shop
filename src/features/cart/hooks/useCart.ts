import addToCart from '@/features/cart/actions/addToCart'
import { ResponseStatus } from '@/types/next'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import removeFromCart from '../actions/removeFromCart'
import { ServerError } from '@/libs/server'

const useCart = () => {
  const add = useMutation({
    mutationFn: async (productId: string) => {
      const res = await addToCart(productId)

      if (res.status === ResponseStatus.ERROR) {
        throw new ServerError(res.message, {
          show: false
        })
      }

      return res
    },
    onSuccess: (res) => {
      toast.success(res.message)
    },
  })

  const remove = useMutation({
    mutationFn: async (productId: string) => {
      const res = await removeFromCart(productId)

      if (res.status === ResponseStatus.ERROR) {
        throw new ServerError(res.message)
      }

      return res
    },
    onSuccess: (res) => {
      toast.success(res.message)
    },
  })

  return {
    add: add.mutateAsync,
    remove: remove.mutateAsync,
  }
}

export default useCart
