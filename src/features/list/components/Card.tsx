import React from "react";
import { Character } from "@/services/model/characters.model";
import { FC } from "react";
type CardType = {
  character: Character;
};
const Card: FC<CardType> = ({ character }) => {
  const { id, name, status, species, gender, origin, location, image } =
    character;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl cursor-pointer transition-all ease-linear">
      <img className="aspect-square object-cover" src={image} alt={name} />
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
    </div>
  );
};
export default Card;
