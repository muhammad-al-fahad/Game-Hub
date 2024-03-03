import {useEffect, useState} from 'react'
import apiClient from '../services/api-client'

interface GameProps {
    id: number
    name: string
}

interface GameListProps {
    count: number,
    results: GameProps[]
}

const Game = () => {
    const [games, setGames] = useState<GameProps[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient
            .get<GameListProps>('/xgames')
            .then((res) => {
                setGames(res.data.results)
            })
            .catch((err) => {
                setError(err.message)
            })
    }, [])

    if(error) return <div className='w-full h-full text-2xl font-bold text-center text-red-600'>{error}</div>
    return (
        <main className='flex items-start justify-center w-full h-full py-4'>
            <ul className='grid justify-start w-full grid-cols-3 px-8'>
                {
                    games.map((game) => {
                        return <li key={game.id} className='text-lg font-semibold text-start'>{game.name}</li>
                    })
                }
            </ul>
        </main>
    )
}

export default Game