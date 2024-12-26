import { MutateOptions, useMutation } from '@tanstack/react-query'
import addToFav from '../actions/addToFav'
import toast from 'react-hot-toast'
import removeFromFav from '../actions/removeFromFav'
import { ResponseStatus } from '@/types/next'

const useFavorite = ({ productId }: { productId: string }) => {
  const add = useMutation({
    mutationFn: async () => {
      const res = await addToFav({ productId })

      if (res.status === ResponseStatus.ERROR) {
        throw new Error(res.error)
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
    mutationFn: async () => {
      const res = await removeFromFav({ productId })

      if (res.status === ResponseStatus.ERROR) {
        throw new Error(res.error)
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
    add: (options?: MutateOptions<void, Error, void, unknown>) =>
      add.mutateAsync(undefined, options),
    remove: (options?: MutateOptions<void, Error, void, unknown>) =>
      remove.mutateAsync(undefined, options),
    isPending: add.isPending || remove.isPending,
  }
}

export default useFavorite
