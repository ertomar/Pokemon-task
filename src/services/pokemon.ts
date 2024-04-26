import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Pokemon, PokemonResponse } from "../types/pokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonResponse, number | void>({
      query: () => `/pokemon`,
    }),
    getPokemonById: builder.query<Pokemon, string | undefined>({
      query: (id) => `/pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
