import { useQuery } from '@tanstack/react-query'
import FetchResponse, { PlatformProps } from '../modal/FetchResponse'
import apiClient from '../services/api-client'

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<PlatformProps>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //1d
})

export default usePlatform