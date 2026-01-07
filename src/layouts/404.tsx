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
    <main p="x4 y10" text="center teal-700 dark:gray-200">
      <div text="4xl">
        <div un-i="carbon-warning" inline="block" />
      </div>
      <Outlet />
      <div>
        <button className="btn" text="sm" m="3 t8" onClick={() => navigate(-1)}>
          {t('button.back')}
        </button>
      </div>
    </main>
  )
}
