import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { i18n, supportedLanguages } from '~/modules/i18n'

async function toggleLanguages() {
  const newIndex = (supportedLanguages.indexOf(i18n.language) + 1) % supportedLanguages.length
  const newLanguage = supportedLanguages[newIndex]
  i18n.changeLanguage(newLanguage)
}

function toggleDark() {
  //
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <nav className="mt-6 flex justify-center gap-4 text-xl">
      <Link className="icon-btn" title={t('button.home')} to="/">
        <div className="i-carbon-campsite" />
      </Link>

      <button className="icon-btn" title={t('button.toggle_dark')} onClick={toggleDark}>
        <div className="i-carbon-sun dark:i-carbon-moon" />
      </button>

      <a className="icon-btn" title={t('button.toggle_langs')} onClick={toggleLanguages}>
        <div className="i-carbon-language" />
      </a>

      <Link className="icon-btn" title={t('button.about')} to="/about" data-test-id="about">
        <div className="i-carbon-dicom-overlay" />
      </Link>

      <a className="icon-btn" rel="noreferrer" href="https://github.com/evaccari/react-vitesse" target="_blank" title="GitHub">
        <div className="i-carbon-logo-github" />
      </a>
    </nav>
  )
}
