import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import '~/modules/i18n'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/main.css'

const head = createHead()

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <RouterProvider router={router} />
    </UnheadProvider>
  </StrictMode>,
)
