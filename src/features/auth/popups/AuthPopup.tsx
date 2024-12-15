import Button from '@components/common/Button'
import Title from '@components/common/Title'
import PopupWrapper from '@components/common/PopupWrapper'
import ReactDOM from 'react-dom'

interface AuthPopupProps {
  onClose: () => void
}

const AuthPopup = ({ onClose }: AuthPopupProps) => {
  return ReactDOM.createPortal(
    <PopupWrapper bodyClassName='p-6' onClose={onClose}>
      <Title className='mb-2 text-center'>Войти</Title>
      <div className='bg-white'>
        <input
          placeholder='email'
          className='focus:border-foregorund-dark rounded-md border-2 border-foreground px-2 py-1 outline-none transition w-56'
        />
      </div>
      <Button className='mt-3 py-2'>Получить код</Button>
    </PopupWrapper>,
    document.body
  )
}

export default AuthPopup
