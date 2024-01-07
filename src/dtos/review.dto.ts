import { AnimeDTO } from "./anime.dto"

export type ReviewDTO = {
  mal_id: string
  user: {
    url: string
    username: string
  }
  date: string
  content: string
  entry: Partial<AnimeDTO>[]
}
