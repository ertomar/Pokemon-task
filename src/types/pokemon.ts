export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
}

export interface Pokemon {
  name: string;
  url: string;
  types?: PokemonType[];
  height?: number;
  weight?: number;
  sprites?: PokemonSprites;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
