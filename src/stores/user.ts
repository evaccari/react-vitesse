import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UserStore {
  savedName: string
  previousNames: Set<string>

  setNewName: (name: string) => void
}

export const useUserStore = create<UserStore>()(
  devtools((set, get) => ({
    savedName: '',
    previousNames: new Set<string>(),

    setNewName(name: string) {
      const { previousNames, savedName } = get()

      if (savedName === name)
        return

      const newPreviousNames = new Set(previousNames)

      if (savedName) {
        newPreviousNames.add(savedName)
      }

      set({
        savedName: name,
        previousNames: newPreviousNames,
      })
    },
  }), {
    name: 'UserStore',
    serialize: { options: true },
  }),
)
