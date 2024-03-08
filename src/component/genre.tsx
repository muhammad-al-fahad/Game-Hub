import useGenre from "../hooks/useGenres";
import { useAppDispatch, useAppSelector } from '../hooks'
import { setGameQuery } from "../store/reducer";

const Genre = () => {
  const dispatch = useAppDispatch();
  const { gameQuery } = useAppSelector((state) => state);

  const { data, error, isLoading } = useGenre();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error)
    return (
      <div className="w-full h-full text-2xl font-bold text-center text-red-600 dark:text-white">
        {error.message}
      </div>
    );
  return (
    <aside className="flex items-start justify-center w-full h-full px-3 py-4">
      <ul className="flex flex-col justify-start w-full gap-6 px-4 sm:px-2 md:px-8">
        <h3 className="text-2xl font-bold text-gray-700 text-start dark:text-gray-50">
          Genres
        </h3>
        {isLoading
          ? skeleton.map((sk) => {
              return (
                <li
                  key={sk}
                  className="flex items-center justify-start space-x-4 text-gray-100 cursor-pointer dark:text-gray-700"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-700 animate-pulse">
                    <svg
                      className="object-cover object-center text-gray-400 max-w-4 max-h-4 dark:text-gray-100"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                  <div className="w-24 h-2 bg-gray-100 rounded-md dark:bg-gray-700 animate-pulse"></div>
                </li>
              );
            })
          : data?.results.map((genre) => {
              return (
                <li
                  key={genre.id}
                  className={`flex items-center justify-start space-x-4 cursor-pointer dark:text-white object-cover ${genre.id === gameQuery.genreId ? 'border-s-4 border-cyan-500 ps-2' : ''}`}
                  onClick={() => dispatch(setGameQuery({ type: 'GENRE', genreId: genre.id }))}
                >
                  <img
                    src={genre.image_background}
                    alt=""
                    className="w-8 h-8 rounded-lg"
                  />
                  <h3 className={`text-lg ${genre.id === gameQuery.genreId && 'text-cyan-500 font-semibold'}`}>{genre.name}</h3>
                </li>
              );
            })}
      </ul>
    </aside>
  );
};

export default Genre;
