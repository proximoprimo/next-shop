'use server'
import transport from '@/libs/nodemailer'
import { UserService } from '@/services/user.service'
import { ActionResponse, ResponseStatus } from '@/types/next'
import prismaClient from '@libs/prisma'
const authUser = async (
  _: any,
  formData: FormData
): Promise<ActionResponse> => {
  const email = formData.get('email') as string

  const user = await UserService.findByEmail(email)

  const code = Math.round(Math.random() * 1000000)

  if (user) {
    await prismaClient.user.update({
      where: { id: user.id },
      data: {
        confirmCode: code.toString(),
      },
    })
  } else {
    await prismaClient.user.create({
      data: {
        email,
        confirmCode: code.toString(),
      },
    })
  }

  try {
    await transport.sendMail({
      to: email,
      subject: 'Код для подтверждения',
      text: `Код для подтверждения: ${code}`,
    })
  } catch (error) {
    return {
      status: ResponseStatus.ERROR,
      message: 'Не удалось отправить email, попробуйте позже',
    }
  }

  return {
    status: ResponseStatus.SUCCESS,
    message: 'Успех',
  }
}

export default authUser
