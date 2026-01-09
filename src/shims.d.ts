import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare interface Window {
  // extend the window
}

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
