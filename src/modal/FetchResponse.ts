export interface PlatformProps {
    id: number
    name: string
    slug: string
}

export interface Trailer {
    id: number
    name: string
    preview: string
    data: {
        480: string
        max: string
    }
}

export interface Screenshot {
    id: number
    image: string
    width: number
    height: number
}

interface PublisherProps {
    id: number
    name: string
}

export interface GameProps {
    id: number
    name: string
    slug: string
    genres: GenreProps[]
    publishers: PublisherProps[]
    description_raw: string
    background_image: string
    parent_platforms: { platform: PlatformProps }[]
    metacritic: number
    rating_top: number
}

export interface GenreProps {
    id: number
    name: string
    image_background: string
}

export interface GameQuery {
  genreId?: number
  platformId?: number 
  sortOrder?: string
  searchText?: string
}

export default interface FetchResponse<T> {
    count: number
    next: number | null
    results: T[]
}