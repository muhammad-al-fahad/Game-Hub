import { useQuery } from '@tanstack/react-query'
import { PlatformProps } from '../modal/FetchResponse'
import APIClient from '../services/api-client'

const apiClient = new APIClient<PlatformProps>('/platforms/lists/parents')
const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //1d
})

export default usePlatform