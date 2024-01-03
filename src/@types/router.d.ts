export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      register_preferences: unknown
      tabs: unknown
      genres: unknown
      listAnimes: {
        genreId?: number
        searchTerm?: string
      }
      viewDetails: {
        animeId: number
      }
    }
  }
} 