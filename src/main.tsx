import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './app'
import { router } from './router'
import '~/modules/i18n'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const head = createHead()

const element = document.getElementById('app')

if (element) {
  hydrateRoot(
    element,
    <StrictMode>
      <UnheadProvider head={head}>
        <RouterProvider router={router} />
        <App />
      </UnheadProvider>
    </StrictMode>,
  )
}
