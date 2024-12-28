import { MutateOptions, useMutation } from '@tanstack/react-query'
import addToFav from '../actions/addToFav'
import toast from 'react-hot-toast'
import removeFromFav from '../actions/removeFromFav'
import { ResponseStatus } from '@/types/next'

const useFavorite = () => {
  const add = useMutation({
    mutationFn: async (productId: string) => {
      const res = await addToFav({ productId })

      if (res.status === ResponseStatus.ERROR) {
        throw new Error(res.message)
      }
    },
    onSuccess: () => {
      toast.success('Добавлено в избранное')
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })

  const remove = useMutation({
    mutationFn: async (productId: string) => {
      const res = await removeFromFav({ productId })

      if (res.status === ResponseStatus.ERROR) {
        throw new Error(res.message)
      }
    },
    onSuccess: () => {
      toast.success('Удалено из избранного')
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })

  return {
    add: add.mutateAsync,
    remove: remove.mutateAsync,
    isPending: add.isPending || remove.isPending,
  }
}

export default useFavorite
