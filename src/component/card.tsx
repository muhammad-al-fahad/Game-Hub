import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { PlatformProps, GameProps } from '../modal/FetchGameResponse';

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
    <div className="overflow-hidden rounded shadow-lg max-w-max dark:bg-white bg-slate-800">
      <img
        className="w-full"
        src={game.background_image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-white dark:text-black">{game.name}</div>
        {/* <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
      </div>
      <div className="flex items-center justify-between py-4 pb-2">
        <div className="grid grid-cols-4 px-3">
            {
                platforms.map(({ platform }) => {
                    return <span key={platform.id} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    {iconMap[platform.slug as keyof typeof iconMap]}
                    </span>
                })
            }
        </div>
        <span className={`px-3 mx-2 text-xl bg-gray-600 rounded-md ${color}`}>{game.metacritic}</span>
      </div>
    </div>
  );
};

export default Card;
