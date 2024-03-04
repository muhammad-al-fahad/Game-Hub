import { useState } from 'react'
import Navbar from "./component/navbar";
import Game from "./component/game";
import Genre from "./component/genre";
import { GenreProps } from './modal/FetchResponse';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProps | null>(null)
  return (
    <>
    <div className="grid grid-cols-1">
      <Navbar />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="hidden text-start lg:block">
        <Genre setSelectedGenre={(genre) => setSelectedGenre(genre)}/>
      </div>
      <div className="col-span-1 text-center lg:col-span-4">
        <Game selectedGenre={selectedGenre}/>
      </div>
    </div>
    </>
  );
}

export default App;