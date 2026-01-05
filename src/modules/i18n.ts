import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: Object.keys(import.meta.glob('../languages/*.yml')).map((path) => (path.match(/([\w-]*)\.yml$/)?.[1])!)
})

export default i18n
