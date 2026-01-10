import { create } from 'zustand'

interface DarkState {
  isDark: boolean
  preferredDark: boolean
  toggleDark: () => void
}

export const useDarkStore = create<DarkState>((set) => {
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const storageValue = localStorage.getItem('color-scheme')
  const preferredDark = mql.matches
  const isDark = storageValue === 'dark' || (storageValue !== 'light' && preferredDark)

  document.documentElement.classList.toggle('dark', isDark)

  const handleChange = (event: MediaQueryListEvent) => {
    set({ preferredDark: event.matches })
  }

  mql.addEventListener('change', handleChange)

  const toggleDark = () => set((state) => {
    const newIsDark = !state.isDark
    document.documentElement.classList.toggle('dark', newIsDark)
    localStorage.setItem('color-scheme', newIsDark ? 'dark' : 'light')
    return { isDark: newIsDark }
  })

  return {
    isDark,
    preferredDark,
    toggleDark,
  }
})
