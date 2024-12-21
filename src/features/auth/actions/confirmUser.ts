'use server'

import { UserService } from '@/services/user.service'
import { ActionResponse, ResponseStatus } from '@/types/next'
import prismaClient from '@libs/prisma'
import { User } from 'next-auth'

const confirmUser = async (
  prevData: ActionResponse<User>,
  formData: FormData
): Promise<ActionResponse<User>> => {
  const email = formData.get('email') as string
  const code = formData.get('code') as string

  const user = await UserService.findByEmail(email)

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
