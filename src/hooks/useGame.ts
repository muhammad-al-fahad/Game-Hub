import { useQuery } from '@tanstack/react-query'
import FetchResponse, { GameProps, GameQuery } from '../modal/FetchResponse'
import apiClient from '../services/api-client'

const useGame = (gameQuery: GameQuery) => useQuery<FetchResponse<GameProps>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FetchResponse<GameProps>>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    }).then(res => res.data)
})

export default useGame 