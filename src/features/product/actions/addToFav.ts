'use server'

import { auth } from '@/auth'
import { ProductService } from '@/services/product.service'
import { ActionResponse, ResponseStatus } from '@/types/next'

const addToFav = async (
  prevData: ActionResponse,
  formData: FormData
): Promise<ActionResponse> => {
  const session = await auth()

  if (!session) {
    return {
      status: ResponseStatus.ERROR,
      error: 'Пользователь не авторизован',
    }
  }

  await ProductService.addToFavorite({
    productId: formData.get('productId') as string,
    userId: session.user.id,
  })

  return {
    status: ResponseStatus.SUCCESS,
    message: 'Товар добавлен в корзину',
  }
}

export default addToFav;