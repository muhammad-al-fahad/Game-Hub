import { useQuery } from '@tanstack/react-query'
import FetchResponse, { GenreProps } from '../modal/FetchResponse'
import apiClient from '../services/api-client'

const useGenre = () => useQuery({
    queryKey: ['genre'],
    queryFn: () => apiClient.get<FetchResponse<GenreProps>>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //1d
})

export default useGenre