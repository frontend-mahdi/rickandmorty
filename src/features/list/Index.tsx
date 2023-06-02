import { useGetCharactersQuery } from "@/services/api/characters";
import React, { useEffect } from "react";
import Card from "./components/Card";

const CharacterList = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: characters,
  } = useGetCharactersQuery();
  useEffect(() => {
    console.log(characters);
  }, [characters]);
  let Result = null;
  if (isLoading) Result = <div>data is loading...</div>;
  if (isError) Result = <div>data failed to load</div>;
  if (isSuccess)
    Result = (
      <div className="max-w-7xl">
        this is test of lazy loading
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
