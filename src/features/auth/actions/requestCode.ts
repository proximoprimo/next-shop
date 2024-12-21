'use server'
import transport from '@/libs/nodemailer'
import { ActionResponse, ResponseStatus } from '@/types/next'
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

  const code = Math.round(Math.random() * 1000000)

  if (user) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        confirmCode: code.toString(),
      },
    })
  } else {
    await prisma.user.create({
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
      error: 'Не удалось отправить email, попробуйте позже',
    }
  }

  return {
    status: ResponseStatus.SUCCESS,
    message: 'Успех',
  }
}

export default authUser
