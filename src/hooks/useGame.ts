import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client'
import FetchGameResponse, { GameProps } from '../modal/FetchGameResponse'

const useGame = () => {
    const [games, setGames] = useState<GameProps[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGameResponse>('/games', { signal: controller.signal })
            .then((res) => {
                console.log(res.data)
                setGames(res.data.results)
            })
            .catch((err) => {
                if( err instanceof CanceledError ) return;
                setError(err.message)
            })

        return () => controller.abort()
    }, [])

    return { games, error }
}

export default useGame 