import { createFileRoute } from '@tanstack/react-router'
import { useHead } from '@unhead/react'
import { useTranslation } from 'react-i18next'
import About from '~/components/About.mdx'

export const Route = createFileRoute('/_default/about')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation()

  useHead({
    title: () => t('button.about'),
  })

  return (
    <div className="prose-md prose dark:prose-invert" m="auto" text="left">
      <About />
    </div>
  )
}
