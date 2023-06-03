import { Character } from "@/services/model/character.model";
import React from "react";

import { FC } from "react";
import { Link } from "react-router-dom";
type CardType = {
  character: Character;
};
const CharacterCard: FC<CardType> = ({ character }) => {
  const { id, name, status, species, gender, origin, location, image } =
    character;
  return (
    <Link
      to={`/characters/${id}`}
      className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl cursor-pointer transition-all ease-linear mx-auto"
    >
      <img
        className="aspect-square w-full object-cover"
        loading="lazy"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Status:</span> {status}
          <br />
          <span className="font-semibold">Species:</span> {species}
          <br />
          <span className="font-semibold">Gender:</span> {gender}
          <br />
          <span className="font-semibold">Origin:</span> {origin.name} <br />
          <span className="font-semibold">Location:</span> {location.name}
        </p>
      </div>
    </Link>
  );
};
export default CharacterCard;
