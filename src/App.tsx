import { useState } from 'react'
import Navbar from "./component/navbar";
import Game from "./component/game";
import Genre from "./component/genre";
import { GameQuery } from './modal/FetchResponse';
import PlatformSelector from './component/platformSelector';
import SortSelector from './component/sortSelector';
import useGenre from './hooks/useGenre';
import usePlatform from './hooks/usePlatforms';

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const { data: genres } = useGenre()
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)

  const { data: platforms } = usePlatform()
  const platform = platforms?.results.find(g => g.id === gameQuery.platformId)

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  
  return (
    <>
    <div className="grid grid-cols-1">
      <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="hidden text-start lg:block">
        <Genre selectedGenreId={gameQuery.genreId} setSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}/>
      </div>
      <div className="col-span-1 text-start lg:col-span-4">
        <h1 className='my-4 text-4xl font-bold text-gray-700 dark:text-gray-50 ms-6'>{heading}</h1>
        <div className="flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
          <PlatformSelector selectedPlatformId={gameQuery.platformId} setSelectedPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
          <SortSelector selectedSort={gameQuery.sortOrder} setSelectedSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </div>
        <Game gameQuery={gameQuery}/>
      </div>
    </div>
    </>
  );
}

export default App;