import React from "react";
import useGames from "../hooks/useGames";
import Card from "./card";
import CardSkeleton from "./cardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppSelector } from '../hooks'

const Game = () => {
  const { gameQuery } = useAppSelector((state) => state)
  const { error, data, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error)
    return (
      <div className="w-full h-full my-4 text-2xl font-bold text-center text-gray-700 dark:text-gray-50">
        {error.message}
      </div>
    );

  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <div className='flex items-center justify-center w-full h-full my-4'>
          <span className='p-4 border-4 rounded-full border-t-gray-100 dark:border-t-gray-600 border-cyan-500 animate-spin'></span>
        </div>
      }
    >
      <main className="flex flex-col items-start justify-center w-full h-full py-4">
        <ul className="grid justify-start w-full grid-cols-1 gap-8 px-4 sm:px-2 md:px-8 sm:grid-cols-2 md:grid-cols-3">
          {isLoading
            ? skeleton.map((sk) => {
                return <CardSkeleton key={sk} />;
              })
            : data?.pages.map((page, index) => {
                return (
                  <React.Fragment key={index}>
                    {page.results.map((game) => {
                      return (
                        <Card
                          key={game.id}
                          game={game}
                          platforms={game.parent_platforms}
                        />
                      );
                    })}
                  </React.Fragment>
                );
              })}
        </ul>
      </main>
    </InfiniteScroll>
  );
};

export default Game;
