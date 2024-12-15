import AuthPopup from '@/features/auth/popups/AuthPopup'
import usePopup from '@/hooks/common/usePopup'
import Button from '@components/common/Button'

const SignInButton = () => {
  const { close, isOpen, open } = usePopup()

  return (
    <>
      <Button
        onClick={open}
        className='flex items-center justify-center px-3 font-medium'
      >
        Войти
      </Button>
      {isOpen && <AuthPopup onClose={close} />}
    </>
  )
}

export default SignInButton
