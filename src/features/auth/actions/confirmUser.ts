'use server'

import { UserService } from '@/services/user.service'
import { ActionResponse, ResponseStatus } from '@/types/next'
import { User } from 'next-auth'

const confirmUser = async (
  prevData: ActionResponse<User>,
  formData: FormData
): Promise<ActionResponse<User>> => {
  const email = formData.get('email') as string
  const code = formData.get('code') as string

  const user = await UserService.findByEmail(email)

  if (user && user.confirmCode === code) {
    await UserService.update(user.id, { confirmCode: null })

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
