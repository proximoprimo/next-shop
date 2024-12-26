'use server'
import { auth } from '@/auth'
import prismaClient from '@/libs/prisma'
import { ActionResponse, ResponseStatus } from '@/types/next'

const removeFromFav = async (data: {
  productId: string
}): Promise<ActionResponse> => {
  const session = await auth()

  if (!session) {
    return {
      status: ResponseStatus.ERROR,
      error: 'Пользователь не авторизован',
    }
  }

  await prismaClient.favorite.delete({
    where: {
      userId_productId: {
        userId: session.user.id,
        productId: data.productId,
      },
    },
  })

  return {
    status: ResponseStatus.SUCCESS,
    message: 'Товар удален из избранного',
  }
}

export default removeFromFav
