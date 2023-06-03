import { useGetEpisodesQuery } from "@/services/api/characters";
import React, { useEffect } from "react";

import Loading from "@/component/Loading";
import Error from "@/component/Error";

import Card from "./components/EpisodeCard";
import { Link, useParams } from "react-router-dom";

const CharacterInfo = () => {
  const { id } = useParams<{ id?: string }>();
  const characterId = Number(id) ?? 1;
  const {
    isLoading,
    isError,
    isSuccess,
    data: episodes,
  } = useGetEpisodesQuery({ id: characterId });

  useEffect(() => {
    console.log(episodes);
  }, [episodes]);
  let Result = null;
  if (isLoading) Result = <Loading />;
  if (isError) Result = <Error />;
  if (isSuccess)
    Result = (
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-6">
          {episodes.map((item, index) => (
            <Card key={index} episode={item} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/characters"
            className="mt-8 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
          >
            Go back to characters
          </Link>
        </div>
      </div>
    );
  return Result;
};
export default CharacterInfo;
