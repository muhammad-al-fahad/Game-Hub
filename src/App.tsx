import useGenre from './hooks/useGenre';
import usePlatform from './hooks/usePlatform';
import Navbar from "./component/navbar";
import Game from "./component/game";
import Genre from "./component/genre";
import PlatformSelector from './component/platformSelector';
import SortSelector from './component/sortSelector';
import { useAppSelector } from './hooks';

function App() {
  const { gameQuery } = useAppSelector((state) => state)
  
  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatform(gameQuery.platformId)

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  
  return (
    <>
    <div className="grid grid-cols-1">
      <Navbar/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="hidden text-start lg:block">
        <Genre/>
      </div>
      <div className="col-span-1 text-start lg:col-span-4">
        <h1 className='my-4 text-4xl font-bold text-gray-700 dark:text-gray-50 ms-6'>{heading}</h1>
        <div className="flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
          <PlatformSelector/>
          <SortSelector/>
        </div>
        <Game/>
      </div>
    </div>
    </>
  );
}

export default App;