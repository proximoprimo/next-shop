import prismaClient from '@/libs/prisma'
import { User } from '@prisma/client'

export class UserService {
  static findByEmail(email: string): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: { email },
    })
  }

  static update(id: string, data: Partial<User>): Promise<User> {
    return prismaClient.user.update({
      where: { id },
      data,
    })
  }
}
