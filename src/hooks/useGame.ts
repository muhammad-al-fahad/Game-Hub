import { useInfiniteQuery } from '@tanstack/react-query'
import { GameProps, GameQuery } from '../modal/FetchResponse'
import APIClient from '../services/api-client'

const apiClient = new APIClient<GameProps>('/games')

const useGame = (gameQuery: GameQuery) => useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
        }
    }),
    staleTime: 24 * 60 * 60 * 1000, //1d
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1
})

export default useGame