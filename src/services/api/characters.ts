import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Character, CharactersResponse } from "../model/characters.model";
import { charactersQuery } from "./query/characters.query";

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
  }),
});

export const { useGetCharactersQuery } = charactersApi;
