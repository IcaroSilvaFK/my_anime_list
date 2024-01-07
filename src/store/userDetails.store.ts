import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type User = {
  username: string
  avatar: string
}

type UserStoreProps = {
  user: User | null,
  setUser: (user: User) => void,
  deleteUser: () => void
}

export const useUserStore = create<UserStoreProps>()(persist((set, get) => ({
  user: null,
  setUser: (user: User) => set(prev => ({ ...prev, user })),
  deleteUser: () => set(prev => ({ ...prev, user: null }))
}), { name: '@userDetails', storage: createJSONStorage(() => AsyncStorage) }))