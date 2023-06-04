import React from "react";

import { useGetCharactersQuery } from "@/services/api/characters";
import Loading from "@/component/Loading";
import Error from "@/component/Error";

import List from "./components/List";

const CharacterList = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: characters,
  } = useGetCharactersQuery();

  let Result = null;
  if (isLoading) Result = <Loading />;
  if (isError) Result = <Error />;
  if (isSuccess) {
    Result = <List characters={characters} />;
  }
  return Result;
};
export default CharacterList;
