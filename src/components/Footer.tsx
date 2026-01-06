import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import { availableLanguages } from '~/modules/i18n'

async function toggleLocales() {
  // change to some real logic
/*    const locales = availableLanguages()
    const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    await loadLanguageAsync(newLocale)
    locale.value = newLocale */
}

function toggleDark() {
  //
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <nav className="flex justify-center gap-4 text-xl">
      <Link className="icon-btn" title={t('button.home')} to="/">
        <div className="i-carbon-campsite" />
      </Link>

      <button className="icon-btn" title={t('button.toggle_dark')} onClick={toggleDark}>
        <div className="i-carbon-sun dark:i-carbon-moon" />
      </button>

      <a className="icon-btn" title={t('button.toggle_langs')} onClick={toggleLocales}>
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
