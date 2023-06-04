import React, { FC } from "react";
import { Episode as EpisodeT } from "@/models/character.model";
import Card from "./EpisodeCard";

type EpisodeType = {
  episode: EpisodeT[];
};
const Episode: FC<EpisodeType> = ({ episode }) => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4 mt-6">Episodes</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-6">
        {episode.map((item, index) => (
          <Card key={index} episode={item} />
        ))}
      </div>
    </>
  );
};
export default Episode;
