import { GenreDTO } from "./genre.dto"

export type AnimeDTO = {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
    }
  }
  title: string
  aired: {
    from: string
    to?: string
  }
  genres: GenreDTO[]
  synopsis?: string
}

