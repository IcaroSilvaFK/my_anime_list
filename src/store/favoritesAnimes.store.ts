import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'


type FavoritesAnimeStore = {
  favoritesAnime: number[]
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  clearFavorites: () => void
}

export const favoritesAnimeStore = create(persist(set => ({}), { name: "@favoritesAnime", storage: createJSONStorage(() => AsyncStorage) }))