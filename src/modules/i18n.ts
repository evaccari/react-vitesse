import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: '',
  react: {
    useSuspense: true,
  },
  supportedLngs: () => {
    const keys = Object.keys(import.meta.glob('../../languages/*.yml'))
    console.log(keys)
  },
})

export default i18n
