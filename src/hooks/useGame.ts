import { useQuery } from '@tanstack/react-query'
import { GameProps, GameQuery } from '../modal/FetchResponse'
import APIClient from '../services/api-client'

const apiClient = new APIClient<GameProps>('/games')

const useGame = (gameQuery: GameQuery) => useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll({
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    })
})

export default useGame