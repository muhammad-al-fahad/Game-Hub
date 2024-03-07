import { useInfiniteQuery } from '@tanstack/react-query'
import { GameProps, GameQuery } from '../modal/FetchResponse'
import APIClient from '../services/api-client'

const apiClient = new APIClient<GameProps>('/games')

const useGame = (gameQuery: GameQuery) => useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
        }
    }),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1
})

export default useGame