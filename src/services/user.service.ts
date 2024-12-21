import prismaClient from '@/libs/prisma'
import { User } from '@prisma/client'

export class UserService {
  static findByEmail(email: string): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: { email },
    })
  }
}
