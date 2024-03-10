import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid, FaStar } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { PlatformProps, GameProps } from '../modal/FetchResponse';
import optimizedImage from '../services/optimized-image';
import { Link } from 'react-router-dom';

interface Props {
    platforms: {platform: PlatformProps}[],
    game: GameProps
}

const Card = ({ platforms, game }: Props) => {
    const iconMap = {
        pc: <FaWindows />,
        playstation: <FaPlaystation />,
        xbox: <FaXbox />,
        nintendo: <SiNintendo />,
        mac: <FaApple />,
        linux: <FaLinux />,
        ios: <MdPhoneIphone />,
        web: <BsGlobe />,
        android: <FaAndroid />    
    }

    const color = game.metacritic > 75 ? 'text-green-400 bg-green-300/20' : game.metacritic > 60 ? 'text-yellow-400 bg-yellow-300/20' : 'text-red-400 bg-red-300/20'
    const rating = game.rating_top > 3 ? 'text-green-500 bg-green-300/20' : game.rating_top > 1 ? 'text-yellow-500 bg-yellow-300/20' : 'text-red-500 bg-red-300/20'

  return (
    <div className="overflow-hidden rounded-lg shadow-lg max-w-max dark:bg-gray-700 bg-gray-50">
      <Link to={`/games/${game.slug}`} className='no-underline'>
        <img
          className="w-full cursor-pointer"
          src={optimizedImage(game.background_image, 600, 400)}
          alt="Sunset in the mountains"
        />
      </Link>
      
      <div className="flex items-center justify-between py-4 pb-2">
        <div className="grid grid-cols-4 px-3">
            {
                platforms.map(({ platform }) => {
                    return <span key={platform.id} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-100 bg-gray-600 rounded-full dark:text-gray-600 dark:bg-gray-100">
                    {iconMap[platform.slug as keyof typeof iconMap]}
                    </span>
                })
            }
        </div>
        <span className={`px-3 mx-2 text-xl bg-gray-600 rounded-md ${color}`}>{game.metacritic}</span>
      </div>

      <div className="px-3 pt-4 pb-2">
        <div className="mb-2 text-xl font-bold text-gray-700 text-start dark:text-gray-50">{game.name}</div>
      </div>

      <div className="flex items-center justify-start px-3 pb-2 space-x-2">
        <span className='text-lg font-bold text-gray-700 -translate-y-[1.25px] dark:text-gray-50'>Rating:</span>
        <p className={`px-3 py-2 text-lg font-semibold rounded-md ${rating}`}>{game.rating_top} <span className='text-gray-700 dark:text-gray-50'>/ 5</span></p>
        <FaStar color='#facc15'/>
      </div>
    </div>
  );
};

export default Card;
