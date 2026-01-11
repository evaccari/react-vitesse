import { createRootRoute, Outlet } from '@tanstack/react-router'
import { useHead } from '@unhead/react'
import RouteProgress from '~/components/RouteProgress'
import { useDarkStore } from '~/stores/dark'

export const Route = createRootRoute({
  component: App,
})

function App() {
  const isDark = useDarkStore(s => s.isDark)
  const preferredDark = useDarkStore(s => s.preferredDark)

  useHead({
    meta: [
      {
        name: 'description',
        content: 'Opinionated Vite Starter Template',
      },
      {
        name: 'theme-color',
        content: isDark ? '#00aba9' : '#ffffff',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: preferredDark ? '/favicon-dark.svg' : '/favicon.svg',
        key: 'favicon',
      },
    ],
  })

  return (
    <>
      <RouteProgress />
      <Outlet />
    </>
  )
}
