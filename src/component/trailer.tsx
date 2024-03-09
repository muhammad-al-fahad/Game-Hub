import useTrailer from '../hooks/useTrailer'

const Trailer = ({ gameId }: { gameId: number }) => {
    const { data: movies, isLoading, error } = useTrailer(gameId)

    if(isLoading) return <div className="flex items-center justify-center w-full bg-gray-100 md:px-2 h-80 animate-pulse dark:bg-gray-600">
                            <video
                                className="object-cover object-center h-48 w-min"
                                aria-hidden="true"
                                controls
                            />
                        </div>
    else if(error ) return <div className="w-full h-full my-4 text-2xl font-bold text-center text-gray-700 dark:text-gray-50">{error.message}</div>
    
    const trailer = movies?.results[0];
    return trailer ? (
        <video className='md:px-2' src={trailer.data['480']} poster={trailer.preview} controls></video>
    ) : null
}

export default Trailer