'use client'
import Button from '@components/common/Button'
import PopupWrapper from '@components/common/PopupWrapper'
import Title from '@components/common/Title'
import { useActionState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import toast from 'react-hot-toast'
import signInCode from '../actions/signInCode'
import { ActionResponse, ResponseStatus } from '@/types/next'

interface AuthPopupProps {
  onClose: () => void
}

export interface AuthFormState {
  message: string
}

const initialState: ActionResponse = {
  status: ResponseStatus.PENDING,
}

const CodePopup = ({ onClose }: AuthPopupProps) => {
  const [state, formAction, pending] = useActionState(signInCode, initialState)

  useEffect(() => {
    console.log(state);
    if (state.status === ResponseStatus.ERROR) {
      toast.error(state.error)
    } else if (state.status === ResponseStatus.SUCCESS) {
      onClose()
    }
  }, [state])

  return ReactDOM.createPortal(
    <PopupWrapper bodyClassName='p-6 w-min'>
      <Title className='mb-2 text-center'>Войти</Title>
      <form action={formAction}>
        <div className='bg-white'>
          <input
            required
            name='email'
            placeholder='email'
            className='w-56 rounded-md border-2 border-foreground px-2 py-1 outline-none transition focus:border-foregorund-dark'
          />
          <input
            required
            name='code'
            type='number'
            placeholder='123456'
            className='w-56 mt-5 rounded-md border-2 border-foreground px-2 py-1 outline-none transition focus:border-foregorund-dark'
          />
        </div>
        <Button disabled={pending} className='mt-3 py-2'>
          Войти
        </Button>

        {state.status === ResponseStatus.SUCCESS && (
          <div className='text-green-300'>{state.message}</div>
        )}
        {state.status === ResponseStatus.ERROR && (
          <div className='text-red-300'>{state.error}</div>
        )}
      </form>
    </PopupWrapper>,
    document.body
  )
}

export default CodePopup
