import { cleanup, render, screen } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AppProviderMock } from "../../mocks/AppProviderMock";
import { pokemonApi } from "../../services/pokemon";
import { appStore } from "../../stores/appStore";

describe("PokemonDetails", () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.clearAllMocks();
    cleanup();
    appStore.dispatch(pokemonApi.util.resetApiState());
  });

  it("should render loading in the beginning", async () => {
    render(
      <AppProviderMock>
        <PokemonDetails />
      </AppProviderMock>
    );

    const pokemonDetails = await screen.findByText("Loading...");

    expect(pokemonDetails).toBeDefined();
  });

  it("should render error message if id not provided", async () => {
    vi.doMock("react-router-dom", async () => {
      const mod = await vi.importActual("react-router-dom");
      return {
        ...mod,
        useParams: () => ({
          id: null,
        }),
      };
    });

    render(
      <AppProviderMock>
        <PokemonDetails />
      </AppProviderMock>
    );

    const errorMessage = await screen.findByText("Error!");

    expect(errorMessage).toBeDefined();
  });
});
