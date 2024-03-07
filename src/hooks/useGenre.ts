import usePlatform from "./usePlatforms"

const useGenre = (id?: number) => {
    const { data: platforms } = usePlatform()
    return platforms?.results.find(g => g.id === id)
}

export default useGenre