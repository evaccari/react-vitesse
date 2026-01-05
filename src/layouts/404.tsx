import { useHead } from '@unhead/react'
import { useTranslation } from 'react-i18next'
import { Outlet, useNavigate } from 'react-router-dom'

export default function NotFoundLayout() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useHead({
    title: () => t('not-found'),
  })

  return (
    <main className='p-x4 p-y10 text-center text-teal-700 dark:text-gray-200'>
      <div className='text-4xl'>
        <div className='i-carbon-warning inline-block' />
      </div>
      <Outlet />
      <div>
        <button className='text-sm btn m-3 m-t8' onClick={() => navigate(-1)}>
          {t('button.back')}
        </button>
      </div>
    </main>
  )
}
