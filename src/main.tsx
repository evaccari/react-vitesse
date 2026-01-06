import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import i18n from '~/modules/i18n'
import App from './app'
import { router } from './router'
import '@unocss/reset/tailwind.css'

import './styles/main.css'
import 'uno.css'

const head = createHead()

const element = document.getElementById('app')

if (element) {
  hydrateRoot(
    element,
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <UnheadProvider head={head}>
          <RouterProvider router={router} />
          <App />
        </UnheadProvider>
      </I18nextProvider>
    </StrictMode>,
  )
}
