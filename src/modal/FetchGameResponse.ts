export interface PlatformProps {
    id: number,
    name: string,
    slug: string
}

export interface GameProps {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: PlatformProps }[],
    metacritic: number
}

export default interface FetchGameResponse {
    count: number,
    results: GameProps[]
}