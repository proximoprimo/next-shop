'use client'
import Button from '@/components/common/Button'
import StyledLink from '@/components/common/StyledLink'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()

  return (
    <div className='mt-40 p-4'>
      <div className='text-center text-xl font-bold mb-4'>Страница не найдена</div>
      <div className='flex flex-col justify-center gap-2'>
        <Button className='py-2' onClick={router.back}>Назад</Button>
        <StyledLink className='py-2' important href='/'>
          На главную
        </StyledLink>
      </div>
    </div>
  )
}

export default NotFound
