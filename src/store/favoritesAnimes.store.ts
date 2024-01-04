import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AnimeDTO } from '../dtos/anime.dto'


type FavoritesAnimeStore = {
  favoritesAnime: AnimeDTO[]
  addFavorite: (anime: AnimeDTO) => void
  removeFavorite: (id: number) => void
  clearFavorites: () => void
}

export const useFavoriteAnimes = create<FavoritesAnimeStore>()(persist((set, get) => ({
  favoritesAnime: [],
  addFavorite(anime) {
    const oldAnimes = get().favoritesAnime
    set(state => ({ ...state, favoritesAnime: [...oldAnimes, anime] }))
  },
  clearFavorites() {
    set(state => ({ ...state, favoritesAnime: [] }))
  },
  removeFavorite(id: number) {
    const currentAnimes = get().favoritesAnime

    set(state => ({ ...state, favoritesAnime: currentAnimes.filter(anime => anime.mal_id !== id) }))
  },
}), { name: "@favoritesAnime", storage: createJSONStorage(() => AsyncStorage) }))