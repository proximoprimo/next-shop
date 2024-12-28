import prismaClient from '@/libs/prisma'

export class ProductService {
  static find({ userId }: { userId?: string } = {}) {
    return prismaClient.product.findMany({
      include: {
        images: true,
        ...(userId ? { favorite: { where: { userId } } } : {}),
        ...(userId
          ? { cartItem: { where: { cart: { userId: userId } } } }
          : {}),
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
