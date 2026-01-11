import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { i18n, supportedLanguages } from '~/modules/i18n'
import { useDarkStore } from '~/stores/dark'

async function toggleLanguages() {
  const newIndex = (supportedLanguages.indexOf(i18n.language) + 1) % supportedLanguages.length
  const newLanguage = supportedLanguages[newIndex]
  i18n.changeLanguage(newLanguage)
}

export default function Footer() {
  const { t } = useTranslation()

  const darkStore = useDarkStore
  const { toggleDark } = darkStore.getState()

  return (
    <nav flex="~ gap-4" justify="center" m="t-6" text="xl">

      <Link icon="btn" to="/" title={t('button.home')}>
        <div un-i="carbon-campsite" />
      </Link>

      <button className="icon-btn" title={t('button.toggle_dark')} onClick={toggleDark}>
        <div un-i="carbon-sun dark:carbon-moon" />
      </button>

      <a icon="btn" title={t('button.toggle_langs')} onClick={toggleLanguages}>
        <div un-i="carbon-language" />
      </a>

      <Link icon="btn" title={t('button.about')} to="/about" data-test-id="about">
        <div un-i="carbon-dicom-overlay" />
      </Link>

      <a icon="btn" rel="noreferrer" href="https://github.com/evaccari/react-vitesse" target="_blank" title="GitHub">
        <div un-i="carbon-logo-github" />
      </a>
    </nav>
  )
}
