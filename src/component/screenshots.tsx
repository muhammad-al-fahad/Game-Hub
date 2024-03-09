import useScreenShot from '../hooks/useScreenshot'
import ScreenShotSkeleton from './screenshotSkeleton'

const Trailer = ({ gameId }: { gameId: number }) => {
    const { data: ScreenShot, isLoading, error } = useScreenShot(gameId)

    if(isLoading) return <div className="grid w-full grid-cols-2 gap-2 md:px-2 h-fit">
                            {
                                [1, 2, 3, 4].map(number => {
                                    return <ScreenShotSkeleton key={number} />
                                })
                            }
                        </div>
    else if(error ) return <div className="w-full h-full my-4 text-2xl font-bold text-center text-gray-700 dark:text-gray-50">{error.message}</div>
    
    const first = ScreenShot?.results;
    return first ? (
        <div className='grid w-full h-full grid-cols-2 gap-2 md:px-2'>
            {
                first.map(img => {
                    return <img key={img.id} src={img.image} alt="" />
                })
            }
        </div>
    ) : null
}

export default Trailer