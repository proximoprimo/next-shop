'use server'
import { auth } from '@/auth'
import prismaClient from '@/libs/prisma'
import { CartService } from '@/services/cart.service'
import { ActionResponse, ResponseStatus } from '@/types/next'

const addToCart = async (productId: string): Promise<ActionResponse> => {
  const session = await auth()
  if (!session) {
    return {
      status: ResponseStatus.ERROR,
      message: 'Вы не авторизованы',
    }
  }

  const userId = session.user.id

  const cart = await CartService.findByUser(userId)

  const item = await prismaClient.cartItem.findUnique({
    where: {
      productId_cartId: {
        productId: productId,
        cartId: cart.id,
      },
    },
  })

  if (item) {
    await prismaClient.cartItem.update({
      where: { id: item.id },
      data: {
        quantity: item.quantity + 1,
        productId: productId,
        cartId: cart.id,
      },
    })
  } else {
    await prismaClient.cartItem.create({
      data: {
        quantity: 1,
        productId: productId,
        cartId: cart.id,
      },
    })
  }

  return {
    status: ResponseStatus.SUCCESS,
    message: 'Товар добавлен в корзину',
  }
}

export default addToCart
