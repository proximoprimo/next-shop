import { auth } from '@/auth'
import prismaClient from '@/libs/prisma'

export class ProductService {
  static find() {
    return prismaClient.product.findMany({
      include: {
        images: true,
      },
    })
  }

  static async addToFavorite({
    userId,
    productId,
  }: {
    userId: string
    productId: string
  }) {
    return prismaClient.favorite.create({
      data: {
        userId,
        productId,
      },
    })
  }
}
