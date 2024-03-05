import useGame from "../hooks/useGame"
import { GameQuery } from "../modal/FetchResponse"
import Card from "./card"
import CardSkeleton from "./cardSkeleton"

interface Props {
    gameQuery: GameQuery
}

const Game = ({ gameQuery }: Props) => {
    const { error, data, isLoading } = useGame(gameQuery)

    const skeleton = [1, 2, 3, 4, 5, 6]

    if(error) return <div className='w-full h-full text-2xl font-bold text-center text-gray-700 dark:text-gray-50'>{error}</div>
    return (
        <main className='flex items-start justify-center w-full h-full py-4'>
            <ul className='grid justify-start w-full grid-cols-1 gap-8 px-4 sm:px-2 md:px-8 sm:grid-cols-2 md:grid-cols-3'>
                {   isLoading ? 
                    skeleton.map(sk => {
                        return <CardSkeleton key={sk}/>
                    })
                    :
                    data.map((game) => {
                        return <Card key={game.id} game={game} platforms={game.parent_platforms} />
                    })
                }
            </ul>
        </main>
    )
}

export default Game