export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      register_preferences: unknown
      tabs: unknown
      genres: unknown
      listAnimes: {
        genreId?: number
        searchTerm?: string
        isTop?: boolean
        isSeason?: boolean
        q?: string
      }
      viewDetails: {
        animeId: number
      }
      home: unknown
      reviews: unknown
      configs: unknown,
      editProfile: unknown
      editFavorite: unknown
      editGenres: unknown
      registerBug: unknown
    }
  }
} 