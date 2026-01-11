import { createRouter, RouterProvider } from '@tanstack/react-router'
import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import '~/modules/i18n'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/main.css'

const head = createHead()

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <RouterProvider router={router} />
    </UnheadProvider>
  </StrictMode>,
)
