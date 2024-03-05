import { GenreProps } from '../modal/FetchResponse'
import useData from "./useData"

const useGenre = () => useData<GenreProps>('/genres')

export default useGenre 