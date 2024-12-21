'use server'
import { signIn } from '@/auth'
import { ActionResponse, ResponseStatus } from '@/types/next'

const signInCode = async (
  prevData: ActionResponse,
  formData: FormData
): Promise<ActionResponse> => {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      code: formData.get('code'),
      redirect: false,
    })
    return {
      status: ResponseStatus.SUCCESS,
      message: 'Вход выполнен',
    }
  } catch (error) {
    console.log('ERROR52', error)

    return {
      status: ResponseStatus.ERROR,
      error: 'Неверный логин или пароль',
    }
  }
}

export default signInCode
