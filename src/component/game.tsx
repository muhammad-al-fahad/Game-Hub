import useGame from "../hooks/useGame"
import Card from "./card"

const Game = () => {
    const { error, games } = useGame()

    if(error) return <div className='w-full h-full text-2xl font-bold text-center text-red-600 dark:text-white'>{error}</div>
    return (
        <main className='flex items-start justify-center w-full h-full py-4'>
            <ul className='grid justify-start w-full grid-cols-1 gap-8 px-4 sm:px-2 md:px-8 sm:grid-cols-2 md:grid-cols-3'>
                {
                    games.map((game) => {
                        return <Card key={game.id} game={game} platforms={game.parent_platforms} />
                    })
                }
            </ul>
        </main>
    )
}

export default Game