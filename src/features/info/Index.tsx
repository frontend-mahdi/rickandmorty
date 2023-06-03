import { useGetEpisodesQuery } from "@/services/api/characters";
import React, { useEffect } from "react";

import Loading from "@/component/Loading";
import Error from "@/component/Error";

import { Link, useParams } from "react-router-dom";
import Episode from "./components/Episode";
import Header from "./components/Header";

const CharacterInfo = () => {
  const { id } = useParams<{ id?: string }>();
  const characterId = Number(id) ?? 1;
  const {
    isLoading,
    isError,
    isSuccess,
    data: character,
  } = useGetEpisodesQuery({ id: characterId });

  let Result = null;
  if (isLoading) Result = <Loading />;
  if (isError) Result = <Error />;
  if (isSuccess)
    Result = (
      <div className="max-w-7xl">
        <div className="mx-auto px-6 ">
          <Header character={character} />
          <Episode episode={character.episode} />
        </div>
      </div>
    );
  return Result;
};
export default CharacterInfo;
