import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type PreferredGenresStore = {
  genresId: number[],
  setGenreId: (genreId: number) => void
  removeGenreId: (genreId: number) => void
  clear: () => void
}

export const usePreferredGenresStore = create<PreferredGenresStore>()(persist((set, get) => ({
  genresId: [],
  setGenreId(genreId) {
    const oldGenres = get().genresId
    const containsGenre = oldGenres.find(id => id === genreId)

    if (containsGenre) {
      set(state => ({ ...state, genresId: [...oldGenres.filter(id => id !== genreId)] }))
      return
    }

    set(state => ({ ...state, genresId: [...oldGenres, genreId] }))
  },
  removeGenreId(genreId) {
    const oldGenres = get().genresId
    const newGenres = oldGenres.filter(id => genreId !== id)
    set(state => ({ ...state, genresId: newGenres }))
  },
  clear() {
    set(state => ({ ...state, genresId: [] }))
  },
}), { name: 'preferredGenres', storage: createJSONStorage(() => AsyncStorage) }))