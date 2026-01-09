import { useTranslation } from 'react-i18next'

interface TranslationProps {
  children: string
}

export default function Translation({ children }: TranslationProps) {
  const { t } = useTranslation()
  return t(children)
}
