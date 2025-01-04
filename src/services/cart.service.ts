import prismaClient from '@/libs/prisma'
import { Cart, Prisma } from '@prisma/client'

export class CartService {
  static async findByUser(userId: string): Promise<Cart> {
    const res = await prismaClient.cart.findUnique({
      where: {
        userId,
      },
    })

    if (res) {
      return res
    }

    return prismaClient.cart.create({
      data: {
        userId,
      },
    })
  }

  static async findItems(userId: string) {
    const include = {
      product: {
        include: {
          images: true,
        },
      },
    } satisfies Prisma.CartItemInclude

    if (userId) {
      ;(include.product.include as Prisma.ProductInclude).favorite = true
    }

    const res = await prismaClient.cartItem.findMany({
      where: {
        cart: {
          userId,
        },
      },
      include,
    })

    return res
  }
}
