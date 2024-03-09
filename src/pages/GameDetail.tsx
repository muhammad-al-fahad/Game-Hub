import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { useState } from 'react'
import Trailer from '../component/trailer'
import Screenshots from '../component/screenshots'

const GameDetail = () => {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGame(slug!)

    const [expanded, setExpanded] = useState<boolean>(false)

    if(isLoading) return <div className='flex items-center justify-center w-full min-h-[90dvh]'>
        <span className='p-4 border-4 rounded-full border-t-gray-100 dark:border-t-gray-600 border-cyan-500 animate-spin'></span>
    </div>
    else if(error || !game) return <div className="w-full h-full my-4 text-2xl font-bold text-center text-gray-700 dark:text-gray-50">{error?.message}</div>
    
    const textLimit = expanded ? game.description_raw : game.description_raw.slice(0, 300) + '...';
    const color = game.metacritic ? game.metacritic > 90 ? 'text-green-400 bg-green-300/20' : game.metacritic > 85 ? 'text-yellow-400 bg-yellow-300/20' : 'text-red-400 bg-red-300/20' : 'text-gray-700 dark:text-gray-50  bg-gray-500/20 dark:bg-gray-300/20';

    return (
        <>
            <h1 className='my-8 text-2xl font-bold text-center text-gray-700 md:text-6xl dark:text-gray-50 text-nowrap sm:text-4xl'>{game.name.toUpperCase()}</h1>
            <div className='grid grid-cols-1 gap-8 px-4 mb-4 md:gap-0 md:space-x-4 md:grid-cols-8 lg:grid-cols-12'>
                <div className='flex flex-col items-start justify-start w-full space-y-4 md:col-span-4 lg:col-span-7'>
                    <div className='flex flex-col items-start justify-start w-full space-y-2'>
                        <p className='text-lg text-gray-700 dark:text-gray-50'>{textLimit}</p>
                        <span className='underline cursor-pointer text-md text-cyan-500 underline-offset-4' onClick={() => setExpanded(!expanded)}>{expanded ? "Show Less" : "Show More"}</span>
                    </div>
                    <div className='grid content-start w-full h-full grid-cols-2 space-y-4 justify-items-start'>
                        <div className='flex flex-col items-start justify-start w-full h-full space-y-2'>
                            <h3 className='text-xl font-semibold text-gray-500 dark:text-gray-300'>Platforms</h3>
                            <div className='flex flex-col items-start justify-start w-full space-y-1 text-gray-700 dark:text-gray-50'>
                                {
                                    game.parent_platforms.map(({ platform }) => {
                                        return <h6 key={platform.id}>{platform.name}</h6>
                                    })
                                }
                            </div>
                        </div>

                        <div className='flex flex-col items-start justify-start w-full h-full space-y-2'>
                            <h3 className='text-xl font-semibold text-gray-500 dark:text-gray-300'>MetaScore</h3>
                            <span className={`px-3 mx-2 text-xl bg-gray-600 rounded-md ${color}`}>{game.metacritic}</span>
                        </div>

                        <div className='flex flex-col items-start justify-start w-full h-full space-y-2'>
                            <h3 className='text-xl font-semibold text-gray-500 dark:text-gray-300'>Genres</h3>
                            <div className='flex flex-col items-start justify-start w-full space-y-1 text-gray-700 dark:text-gray-50'>
                                {
                                    game.genres.map((genre) => {
                                        return <h6 key={genre.id}>{genre.name}</h6>
                                    })
                                }
                            </div>
                        </div>

                        <div className='flex flex-col items-start justify-start w-full h-full space-y-2'>
                            <h3 className='text-xl font-semibold text-gray-500 dark:text-gray-300'>Genres</h3>
                            <div className='flex flex-col items-start justify-start w-full space-y-1 text-gray-700 dark:text-gray-50'>
                                {
                                    game.publishers.map((publish) => {
                                        return <h6 key={publish.id}>{publish.name}</h6>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full space-y-4 md:col-span-4 lg:col-span-5'>
                    <Trailer gameId={game.id} />
                    <Screenshots gameId={game.id} />
                </div>
            </div>
        </>
        )
}

export default GameDetail