'use server'

import { auth } from '@/auth'
import { ProductService } from '@/services/product.service'
import { ActionResponse, ResponseStatus } from '@/types/next'

const addToFav = async (data: {
  productId: string
}): Promise<ActionResponse> => {
  const session = await auth()

  if (!session) {
    throw new Error('Вы не авторизованы')
    // return {
    //   status: ResponseStatus.ERROR,
    //   error: 'Вы не авторизованы',
    // }
  }

  await ProductService.addToFavorite({
    productId: data.productId,
    userId: session.user.id,
  })

  return {
    status: ResponseStatus.SUCCESS,
    message: 'Товар добавлен в корзину',
  }
}

export default addToFav
