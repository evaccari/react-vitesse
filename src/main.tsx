import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './app'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

const head = createHead()

hydrateRoot(
  document.getElementById('app')!,
  <StrictMode>
    <UnheadProvider head={head}>
      <RouterProvider router={router} />
      <App />
    </UnheadProvider>
  </StrictMode>,
)
