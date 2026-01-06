import { useHead } from '@unhead/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Input from '~/components/Input'
import { useUserStore } from '~/stores/user'

export default function HomePage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [name, setName] = useState(useUserStore.getState().savedName)

  function go() {
    if (name)
      navigate(`hi/${encodeURIComponent(name)}`)
  }

  useHead({
    title: t('button.home'),
  })

  return (
    <div>
      <div className="text-4xl">
        <div className="i-carbon-campsite inline-block" />
      </div>
      <p>
        <a rel="noreferrer" href="https://github.com/evaccari/react-vitesse" target="_blank">
          React Vitesse
        </a>
      </p>
      <p>
        <em className="text-sm opacity-75">{t('intro.desc')}</em>
      </p>

      <div className="py-4" />

      <Input
        value={name}
        placeholder={t('intro.whats-your-name')}
        autoComplete="off"
        name="name"
        onChange={e => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter')
            go()
        }}
      />
      <label className="hidden" htmlFor="input">{t('intro.whats-your-name')}</label>

      <div>
        <button
          className="m-3 btn text-sm"
          disabled={!name}
          onClick={go}
        >
          {t('button.go')}
        </button>
      </div>
    </div>
  )
}
