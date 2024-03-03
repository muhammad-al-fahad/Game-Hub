import Navbar from "./component/navbar";
import Game from "./component/game";

function App() {
  return (
    <>
    <div className="grid grid-cols-1 bg-white dark:bg-gray-800">
      <Navbar />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="hidden text-center lg:block">
        Men Power
      </div>
      <div className="col-span-1 text-center lg:col-span-4">
        <Game />
      </div>
    </div>
    </>
  );
}

export default App;