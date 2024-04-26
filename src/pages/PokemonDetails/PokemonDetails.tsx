import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../../services/pokemon";
import "./pokemonDetails.css";
import { RowData } from "./components/RowData";

export default function PokemonDetails() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  if (error) {
    return <div className="wrapper">Error!</div>;
  }

  if (isLoading) {
    return <div className="wrapper">Loading...</div>;
  }

  return (
    <div className="wrapper">
      <h1>{data?.name}</h1>

      <div className="pokemon-details" data-testid="pokemon-details">
        <img src={data?.sprites?.front_default} alt={data?.name} />

        <RowData label="Name" value={data?.name} />
        <RowData label="Height" value={data?.height} />
        <RowData label="Weight" value={data?.weight} />
        <RowData
          label="Types"
          value={data?.types?.map((type) => type.type.name).join(", ")}
        />
      </div>
    </div>
  );
}
