export interface PlatformProps {
    id: number
    name: string
    slug: string
}

export interface GameProps {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: PlatformProps }[]
    metacritic: number
}

export interface GenreProps {
    id: number
    name: string
    image_background: string
}

export default interface FetchResponse<T> {
    count: number
    results: T[]
}