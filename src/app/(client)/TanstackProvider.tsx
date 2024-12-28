'use client'
import { ServerError } from '@/libs/server'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import toast from 'react-hot-toast'

const client = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        if(error instanceof ServerError && error.show) {
          toast.error(error.message)
        }
      }
    }
  }
})

const TanstackProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  )
}

export default TanstackProvider
