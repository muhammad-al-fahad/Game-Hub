import React from "react";
import useGame from "../hooks/useGame";
import { GameQuery } from "../modal/FetchResponse";
import Card from "./card";
import CardSkeleton from "./cardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const Game = ({ gameQuery }: Props) => {
  const { error, data, isLoading, fetchNextPage, hasNextPage } =
    useGame(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error)
    return (
      <div className="w-full h-full text-2xl font-bold text-center text-gray-700 dark:text-gray-50">
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
        <div className="grid justify-start w-full grid-cols-1 gap-8 px-4 pt-2 pb-4 sm:px-2 md:px-8 sm:grid-cols-2 md:grid-cols-3">
            {
                [1, 2, 3].map(loader => {
                    return <CardSkeleton key={loader}/>
                })
            }
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
