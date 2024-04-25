import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { appStore } from "../stores/appStore";
import { pokemonApi } from "../services/pokemon";

afterEach(() => {
  cleanup();
  appStore.dispatch(pokemonApi.util.resetApiState());
});
