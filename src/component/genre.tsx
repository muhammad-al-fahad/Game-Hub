import useGenre from "../hooks/useGenerics";
import { GenreProps } from "../modal/FetchResponse";

interface Props {
  setSelectedGenre: (genre: GenreProps) => void
}

const Genre = ({ setSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error)
    return (
      <div className="w-full h-full text-2xl font-bold text-center text-red-600 dark:text-white">
        {error}
      </div>
    );
  return (
    <aside className="flex items-start justify-center w-full h-full px-3 py-4">
      <ul className="flex flex-col justify-start w-full gap-6 px-4 sm:px-2 md:px-8">
        {isLoading
          ? skeleton.map((sk) => {
              return (
                <li
                  key={sk}
                  className="flex items-center justify-start space-x-4 cursor-pointer dark:text-white"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 dark:bg-white animate-pulse">
                    <svg
                      className="object-cover object-center text-gray-200 max-w-4 max-h-4 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                  <div className="w-24 h-2 rounded-md bg-slate-800 dark:bg-white animate-pulse"></div>
                </li>
              );
            })
          : data.map((genre) => {
              return (
                <li
                  key={genre.id}
                  className="flex items-center justify-start space-x-4 cursor-pointer dark:text-white"
                  onClick={() => setSelectedGenre(genre)}
                >
                  <img
                    src={genre.image_background}
                    alt=""
                    className="w-8 h-8 rounded-lg"
                  />
                  <h3 className="text-lg">{genre.name}</h3>
                </li>
              );
            })}
      </ul>
    </aside>
  );
};

export default Genre;
