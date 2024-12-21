'use server'
import { signIn } from '@/auth'
import { ActionResponse, ResponseStatus } from '@/types/next'
import { redirect } from 'next/navigation'

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
  } catch (error) {
    console.log('ERROR52', error)

    return {
      status: ResponseStatus.ERROR,
      error: 'Неверный логин или пароль',
    }
  }

  redirect('/')
}

export default signInCode
