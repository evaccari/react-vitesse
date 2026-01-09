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
      <div text="4xl">
        <div un-i="carbon-campsite" inline="block" />
      </div>
      <p>
        <a rel="noreferrer" href="https://github.com/evaccari/react-vitesse" target="_blank">
          React Vitesse
        </a>
      </p>
      <p>
        <em text="sm" un-opacity="75">{t('intro.desc')}</em>
      </p>

      <div p="y-4" />

      <Input
        value={name}
        placeholder={t('intro.whats-your-name')}
        autoComplete="off"
        onChange={e => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter')
            go()
        }}
      />
      <label className="hidden" htmlFor="input">{t('intro.whats-your-name')}</label>

      <div>
        <button className="btn" m="3" text="sm" disabled={!name} onClick={go}>
          {t('button.go')}
        </button>
      </div>
    </div>
  )
}
