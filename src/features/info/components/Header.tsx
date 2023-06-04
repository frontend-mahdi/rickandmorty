import React, { FC } from "react";
import { Character } from "@/services/model/character.model";
import { Link } from "react-router-dom";

type HeaderType = {
  character: Character;
};
const Header: FC<HeaderType> = ({ character }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-end flex-wrap">
        <div className="flex flex-row gap-3 md:gap-14 items-start flex-wrap">
          <div className="flex items-center mb-4">
            <img
              src={character.image}
              alt={character.name}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold">{character.name}</h2>
              <p className="text-gray-500">
                {character.status} - {character.species}
              </p>
              <p className="text-gray-500">{character.gender}</p>
            </div>
          </div>

          <div className="mb-6 md:mt-5">
            <h3 className="text-lg font-semibold mb-2">Origin</h3>
            <p>{character.origin.name}</p>
            <p>{character.origin.type}</p>
            <p>{character.origin.dimension}</p>
          </div>

          <div className="mb-6 md:mt-5">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p>{character.location.name}</p>
            <p>{character.location.type}</p>
            <p>{character.location.dimension}</p>
          </div>
        </div>
        <div className="mt-8 text-center self-center">
          <Link
            to="/characters"
            className="mt-8 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
          >
            Go back to characters
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
