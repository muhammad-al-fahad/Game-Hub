import { useState } from 'react'
import Navbar from "./component/navbar";
import Game from "./component/game";
import Genre from "./component/genre";
import { GameQuery } from './modal/FetchResponse';
import PlatformSelector from './component/platformSelector';
import SortSelector from './component/sortSelector';

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  
  return (
    <>
    <div className="grid grid-cols-1">
      <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="hidden text-start lg:block">
        <Genre selectedGenre={gameQuery.genre} setSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
      </div>
      <div className="col-span-1 text-start lg:col-span-4">
        <h1 className='my-4 text-4xl font-bold text-gray-700 dark:text-gray-50 ms-6'>{heading}</h1>
        <div className="flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
          <PlatformSelector selectedPlatform={gameQuery.platform} setSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          <SortSelector selectedSort={gameQuery.sortOrder} setSelectedSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </div>
        <Game gameQuery={gameQuery}/>
      </div>
    </div>
    </>
  );
}

export default App;