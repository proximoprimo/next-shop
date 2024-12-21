import AuthPopup from '@/features/auth/popups/AuthPopup'
import CodePopup from '@/features/auth/popups/CodePopup'
import usePopup from '@/hooks/common/usePopup'
import Button from '@components/common/Button'

const SignInButton = () => {
  const { close, isOpen, open } = usePopup()
  const { close: closeCode, isOpen: isCodeOpen, open: openCode } = usePopup()

  return (
    <>
      <Button
        onClick={open}
        className='flex items-center justify-center px-3 font-medium'
      >
        Войти
      </Button>
      {isOpen && <AuthPopup onSuccess={openCode} onClose={close} />}
      {isCodeOpen && <CodePopup onClose={closeCode} />}
    </>
  )
}

export default SignInButton
