import confirmUser from '@/features/auth/actions/confirmUser'
import { ResponseStatus } from '@/types/next'
import jsonToFormData from '@/utils/jsonToFormData'
import NextAuth, { DefaultSession, NextAuthConfig } from 'next-auth'
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
        const formData = jsonToFormData({
          email: credentials.email as string,
          code: credentials.code as string,
        })

        const res = await confirmUser(
          { status: ResponseStatus.PENDING },
          formData
        )

        if (res.status === ResponseStatus.SUCCESS) {
          console.log('res.data', res.data)
          return res.data!
        }

        throw new Error('Invalid credentials.')
      },
    }),
  ],
  basePath: AUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}
