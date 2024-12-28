import prismaClient from '@/libs/prisma'
import { Cart } from '@prisma/client'

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

    console.log('res', userId)

    return prismaClient.cart.create({
      data: {
        userId,
      },
    })
  }
}
