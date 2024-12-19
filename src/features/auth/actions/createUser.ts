'use server'
import { ActionResponse } from '@/types/next'
import prisma from '@libs/prisma'
const authUser = async (
  prevData: ActionResponse,
  formData: FormData
): Promise<ActionResponse> => {
  const email = formData.get('email') as string

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    return {
      success: false,
      error: 'user already exists',
    }
  }

  const test = await prisma.user.create({
    data: {
      email,
    },
  })

  console.log(test);

  return {
    success: true,
    message: 'user created',
  }
}

export default authUser
