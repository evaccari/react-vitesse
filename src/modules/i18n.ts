import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { load } from 'js-yaml'
import { initReactI18next } from 'react-i18next'

const supportedLanguages = Object.keys(import.meta.glob('/locales/*.yml')).reduce((languages: string[], path) => {
  const language = path.match(/([\w-]*)\.yml$/)?.[1]
  if (language) {
    languages.push(language)
  }

  return languages
}, [])

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.yml',
      parse: (data: string) => {
        return load(data)
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    supportedLngs: supportedLanguages,
  })

i18n.loadLanguages(['en'])

export { i18n, supportedLanguages }
