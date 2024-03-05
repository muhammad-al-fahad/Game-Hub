import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { PlatformProps, GameProps } from '../modal/FetchResponse';
import optimizedImage from '../services/optimized-image';

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

    const color = game.metacritic > 90 ? 'text-green-300/95 bg-green-300/20' : game.metacritic > 85 ? 'text-yellow-300/95 bg-yellow-300/20' : 'text-red-300/95 bg-red-300/20'

  return (
    <div className="overflow-hidden rounded-lg shadow-lg max-w-max dark:bg-gray-700 bg-gray-50">
      <img
        className="w-full"
        src={optimizedImage(game.background_image, 600, 400)}
        alt="Sunset in the mountains"
      />
      
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
    </div>
  );
};

export default Card;
