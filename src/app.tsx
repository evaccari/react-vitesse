import { useHead } from '@unhead/react'
import { Outlet } from 'react-router-dom'

export default function App() {
  useHead({
    title: 'Vitesse',
    meta: [
      {
        name: 'description',
        content: 'Opinionated Vite Starter Template',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
  })

  return <Outlet />
}
