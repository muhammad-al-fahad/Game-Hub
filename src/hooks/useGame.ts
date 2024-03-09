import { useQuery } from "@tanstack/react-query"
import { GameProps } from "../modal/FetchResponse"
import APIClient from "../services/api-client"

const apiClient = new APIClient<GameProps>('/games')

const useGame = (slug: string) => useQuery({
    queryKey: ['game', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000
})

export default useGame