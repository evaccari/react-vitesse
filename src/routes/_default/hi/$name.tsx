import { createFileRoute, Link, useParams, useRouter } from '@tanstack/react-router'
import { useHead } from '@unhead/react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserStore } from '~/stores/user'

export const Route = createFileRoute('/_default/hi/$name')({
  component: HiPage,
})

function HiPage() {
  const router = useRouter()
  const { name } = useParams({ from: '/_default/hi/$name' })
  const { t } = useTranslation()

  const { setNewName } = useUserStore.getState()

  const previousNames = useUserStore(s => s.previousNames)
  const savedName = useUserStore(s => s.savedName)

  const otherNames = Array.from(previousNames).filter(name => name !== savedName).sort((a, b) => a.localeCompare(b))

  useEffect(() => {
    if (name) {
      setNewName(name)
    }
  }, [name, setNewName])

  useHead({
    title: t('intro.hi', { name: savedName }),
  })

  return (
    <div>
      <div text="4xl">
        <div un-i="carbon-pedestrian" inline="block" />
      </div>

      <p>
        {t('intro.hi', { name: savedName })}
      </p>

      <p text="sm" un-opacity="75">
        <em>{t('intro.dynamic-route')}</em>
      </p>

      {otherNames.length > 0 && (
        <div m="t-4" text="sm">
          <span un-opacity="75">
            {t('intro.aka')}
            :
          </span>
          <ul>
            {otherNames.map(otherName => (
              <li key={otherName}>
                <Link to={`/hi/${otherName}`} replace>
                  {otherName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <button className="btn" m="3 t-6" text="sm" onClick={() => router.history.back()}>
          {t('button.back')}
        </button>
      </div>
    </div>
  )
}
