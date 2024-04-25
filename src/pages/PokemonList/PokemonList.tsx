import { useNavigate } from "react-router-dom";

import { useGetPokemonListQuery } from "../../services/pokemon";

import "./pokemonList.css";
import { extractPokemonId } from "./utils";

export default function PokemonList() {
  const { data, error, isLoading } = useGetPokemonListQuery();

  const navigate = useNavigate();

  const onPokemonClick = (url: string) => {
    const id = extractPokemonId(url);

    navigate(`/pokemon/${id}`);
  };

  if (error) {
    return <div className="wrapper">Error!</div>;
  }

  if (isLoading) {
    return <div className="wrapper">Loading...</div>;
  }

  return (
    <div className="wrapper">
      <h1>PokeReact</h1>

      <div className="pokemon-list">
        {data?.results?.map((pokemon) => (
          <button
            key={pokemon.name}
            className="pokemon-item"
            data-testid="pokemon-item"
            onClick={() => onPokemonClick(pokemon.url)}
          >
            <p>{pokemon.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
