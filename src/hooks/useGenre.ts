import { useQuery } from '@tanstack/react-query'
import { GenreProps } from '../modal/FetchResponse'
import APIClient from '../services/api-client'

const apiClient = new APIClient<GenreProps>('/genres')

const useGenre = () => useQuery({
    queryKey: ['genre'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //1d
})

export default useGenre