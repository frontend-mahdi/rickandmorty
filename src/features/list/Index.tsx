import React, { useEffect, useState } from "react";

import { useGetCharactersQuery } from "@/services/api/characters";
import Loading from "@/component/Loading";
import Error from "@/component/Error";

import Card from "./components/CharacterCard";

const CharacterList = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: characters,
  } = useGetCharactersQuery();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(characters);
  }, [characters]);
  let Result = null;
  if (isLoading) Result = <Loading />;
  if (isError) Result = <Error />;
  if (isSuccess)
    Result = (
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-6">
          {characters.map((item, index) => (
            <Card key={index} character={item} />
          ))}
        </div>
      </div>
    );
  return Result;
};
export default CharacterList;
