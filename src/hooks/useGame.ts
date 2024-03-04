import { GameProps, GenreProps } from '../modal/FetchResponse'
import useData from "./useData"

const useGame = (selectedGenre: GenreProps | null) => useData<GameProps>(`${selectedGenre ? 'games?genres=' + selectedGenre.id : '/games'}`, [selectedGenre?.id])

export default useGame 