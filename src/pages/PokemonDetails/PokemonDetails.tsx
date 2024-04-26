import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../../services/pokemon";
import "./pokemonDetails.css";
import { RowData } from "./components/RowData";

export default function PokemonDetails() {
  const { id } = useParams();

  const { data: PokemonData, error, isLoading } = useGetPokemonByIdQuery(id);

  if (error) {
    return <div className="wrapper">Error!</div>;
  }

  if (isLoading) {
    return <div className="wrapper">Loading...</div>;
  }

  return (
    <div className="wrapper">
      <h1>{PokemonData?.name}</h1>

      <div className="pokemon-details" data-testid="pokemon-details">
        <img
          src={PokemonData?.sprites?.front_default}
          alt={PokemonData?.name}
        />

        <RowData label="Name" value={PokemonData?.name} />
        <RowData label="Height" value={`${PokemonData?.height} cm`} />
        <RowData label="Weight" value={`${PokemonData?.weight} kg`} />
        <RowData
          label="Types"
          value={PokemonData?.types?.map((type) => type.type.name).join(", ")}
        />
      </div>
    </div>
  );
}
