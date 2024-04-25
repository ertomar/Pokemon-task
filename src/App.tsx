import "./App.css";

import PokemonList from "./pages/PokemonList/PokemonList";
import { Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}

export default App;
