'use client'
import Button from '@components/common/Button'
import PopupWrapper from '@components/common/PopupWrapper'
import Title from '@components/common/Title'
import { useActionState } from 'react'
import ReactDOM from 'react-dom'
import authUser from '../actions/createUser'

interface AuthPopupProps {
  onClose: () => void
}

export interface AuthFormState {
  message: string
}

const initialState = {
  message: '',
  error: '',
  success: true,
}

const AuthPopup = ({ onClose }: AuthPopupProps) => {
  const [state, formAction, pending] = useActionState(authUser, initialState)

  console.log(state)

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

        {state.success && <div className='text-green-300'>{state.message}</div>}
        {!state.success && <div className='text-red-300'>{state.error}</div>}
      </form>
    </PopupWrapper>,
    document.body
  )
}

export default AuthPopup
