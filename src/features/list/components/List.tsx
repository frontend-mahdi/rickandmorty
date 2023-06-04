import { Character } from "@/services/model/character.model";
import React, { FC, useState } from "react";
import CharacterCard from "./CharacterCard";
type ListType = {
  characters: Character[];
};
const List: FC<ListType> = ({ characters }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="max-w-7xl">
      <div className="px-2">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 mb-4"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-6">
        {filteredCharacters.map((item, index) => (
          <CharacterCard key={index} character={item} />
        ))}
      </div>
    </div>
  );
};
export default List;
