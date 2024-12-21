'use server'

import { ActionResponse, ResponseStatus } from '@/types/next'
import prisma from '@libs/prisma'
import { User } from 'next-auth'

const confirmUser = async (
  prevData: ActionResponse<User>,
  formData: FormData
): Promise<ActionResponse<User>> => {
  const email = formData.get('email') as string
  const code = formData.get('code') as string

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  console.log(user?.confirmCode === code)

  if (user && user.confirmCode === code) {
    return {
      status: ResponseStatus.SUCCESS,
      message: 'Пользователь успешно авторизован',
      data: user,
    }
  }

  return {
    status: ResponseStatus.ERROR,
    error: 'Неверный код',
  }
}

export default confirmUser
