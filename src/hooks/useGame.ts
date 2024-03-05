import { GameProps, GameQuery } from '../modal/FetchResponse'
import useData from "./useData"

const useGame = (gameQuery: GameQuery) => useData<GameProps>(
    '/games',
    {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
        }
    },
    [gameQuery])

export default useGame 