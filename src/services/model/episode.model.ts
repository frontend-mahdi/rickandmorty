import { Character } from "./characters.model";

export interface EpisodeResponse {
  data: {
    character: {
      episode: Episode[];
    } & Character;
  };
}

export interface Episode {
  name: string;
  air_date: string;
  episode: string;
}
