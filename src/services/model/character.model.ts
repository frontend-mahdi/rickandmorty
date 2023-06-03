export interface CharactersResponse {
  data: {
    characters: {
      results: Character[];
    };
  };
}

export interface CharacterResponse {
  data: {
    character: {
      episode: Episode[];
    } & Character;
  };
}
export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    type: string;
    dimension: string;
  };
  location: {
    name: string;
    type: string;
    dimension: string;
  };
  image: string;
}
export interface Episode {
  name: string;
  air_date: string;
  episode: string;
}
