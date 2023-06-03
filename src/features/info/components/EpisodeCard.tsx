import { Episode } from "@/services/model/episode.model";
import React, { FC } from "react";

type CardType = {
  episode: Episode;
};

const EpisodeCard: FC<CardType> = ({ episode }) => {
  const { name, air_date, episode: episodeCode } = episode;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">
        <span className="font-bold">Air Date:</span> {air_date}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Episode Code:</span> {episodeCode}
      </p>
    </div>
  );
};

export default EpisodeCard;
