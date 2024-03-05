/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client'
import FetchResponse from '../modal/FetchResponse'
import { AxiosRequestConfig } from 'axios'

const useGame = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if( err instanceof CanceledError ) return;
                setError(err.message)
                setLoading(false)
            })

        return () => controller.abort()
    }, deps ? [...deps] : [])

    return { data, error, isLoading }
}

export default useGame