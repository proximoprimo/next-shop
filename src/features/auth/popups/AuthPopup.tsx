'use client'
import Button from '@components/common/Button'
import PopupWrapper from '@components/common/PopupWrapper'
import Title from '@components/common/Title'
import { useActionState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import authUser from '../actions/requestCode'
import toast from 'react-hot-toast'
import { ActionResponse, ResponseStatus } from '@/types/next'
import { cn } from '@/utils/cn'

interface AuthPopupProps {
  onClose: () => void
  onSuccess: () => void
}

export interface AuthFormState {
  message: string
}
const AuthPopup = ({ onClose, onSuccess }: AuthPopupProps) => {
  const [state, formAction, pending] = useActionState(authUser, null)

  useEffect(() => {
    console.log(state)
    if (state?.status === ResponseStatus.SUCCESS) {
      onClose()
      onSuccess()
    } else if (state?.status === ResponseStatus.ERROR) {
      toast.error('Что-то пошло не так')
    }
  }, [state])

  return ReactDOM.createPortal(
    <PopupWrapper bodyClassName='p-6' onClose={onClose}>
      <Title className='mb-2 text-center'>Войти</Title>
      <form action={formAction}>
        <div className='bg-white'>
          <input
            required
            name='email'
            placeholder='email'
            className='w-56 rounded-md border-2 border-foreground px-2 py-1 outline-none transition focus:border-foregorund-dark'
          />
        </div>
        <Button disabled={pending} className='mt-3 py-2'>
          Получить код
        </Button>

        {state?.status && (
          <div
            className={cn({
              'text-green-400': state.status === ResponseStatus.SUCCESS,
              'text-red-400': state.status === ResponseStatus.ERROR,
            })}
          >
            {state.message}
          </div>
        )}
      </form>
    </PopupWrapper>,
    document.body
  )
}

export default AuthPopup
