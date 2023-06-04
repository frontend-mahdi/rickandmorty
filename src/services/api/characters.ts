import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  Character,
  CharacterResponse,
  CharactersResponse,
} from "@/models/character.model";

import { charactersQuery } from "./query/characters.query";
import { episodeQuery } from "./query/episode.query";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/graphql",
    timeout: 10 * 1000,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], void>({
      query: () => ({
        url: "/",
        method: "post",
        body: {
          query: charactersQuery,
        },
      }),
      transformResponse: (response: CharactersResponse) =>
        response.data.characters.results,
    }),
    getEpisodes: builder.query<
      CharacterResponse["data"]["character"],
      { id: number }
    >({
      query: ({ id }) => ({
        url: "/",
        method: "post",
        body: {
          query: episodeQuery,
          variables: { id },
        },
      }),
      transformResponse: (response: CharacterResponse) => {
        return response.data.character;
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetEpisodesQuery } = charactersApi;
