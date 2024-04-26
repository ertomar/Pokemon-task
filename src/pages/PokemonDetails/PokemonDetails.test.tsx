import { cleanup, render, screen, waitFor } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AppProviderMock } from "../../mocks/AppProviderMock";
import { pokemonApi } from "../../services/pokemon";
import { appStore } from "../../stores/appStore";
import { act } from "react-dom/test-utils";

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
    act(() => {
      vi.doMock("react-router-dom", async () => {
        const mod = await vi.importActual("react-router-dom");
        return {
          ...mod,
          useParams: () => ({
            id: null,
          }),
        };
      });
    });

    render(
      <AppProviderMock>
        <PokemonDetails />
      </AppProviderMock>
    );

    const errorMessage = await screen.findByText("Error!");

    expect(errorMessage).toBeDefined();
  });

  it("should render pokemon details", async () => {
    act(() => {
      vi.doMock("react-router-dom", async () => {
        const mod = await vi.importActual("react-router-dom");
        return {
          ...mod,
          useParams: () => ({
            id: "1",
          }),
        };
      });
    });

    render(
      <AppProviderMock>
        <PokemonDetails />
      </AppProviderMock>
    );

    waitFor(async () => {
      const pokemonName = await screen.findByText("Name");
      const pokemonHeight = await screen.findByText("Height");
      const pokemonWeight = await screen.findByText("Weight");
      const pokemonTypes = await screen.findByText("Types");

      const pokemonDetails = await screen.findByTestId("pokemon-details");

      expect(pokemonName).toBeDefined();
      expect(pokemonHeight).toBeDefined();
      expect(pokemonWeight).toBeDefined();
      expect(pokemonDetails).toBeDefined();
      expect(pokemonTypes).toBeDefined();
    });
  });
});
