import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './app'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const head = createHead()

hydrateRoot(
  document.getElementById('app')!,
  <StrictMode>
    <UnheadProvider head={head}>
      <App />
    </UnheadProvider>
  </StrictMode>,
)
