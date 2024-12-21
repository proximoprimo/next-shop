import confirmUser from '@/features/auth/actions/confirmUser'
import { ResponseStatus } from '@/types/next'
import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
export const AUTH_URL = '/api/auth'

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'example@example.com',
        },
        code: { label: 'code', type: 'text', placeholder: '123456' },
      },
      async authorize(credentials) {
        const formData = new FormData()
        const email = credentials.email as string
        const code = credentials.code as string
        console.log(email, code)
        formData.append('email', email)
        formData.append('code', code)
        const res = await confirmUser(
          { status: ResponseStatus.PENDING },
          formData
        )

        if (res.status === ResponseStatus.SUCCESS) {
          return res.data!
        }

        throw new Error('Invalid credentials.')
      },
    }),
  ],
  basePath: AUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
