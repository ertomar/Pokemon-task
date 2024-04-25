import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { AppProviderMock } from "../../mocks/AppProviderMock";
import * as reactRouterDom from "react-router-dom";
import { pokemonApi } from "../../services/pokemon";
import { appStore } from "../../stores/appStore";

describe("Pokemon List", () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.clearAllMocks();
    cleanup();
    appStore.dispatch(pokemonApi.util.resetApiState());
  });

  test("should navigate to pokemon details", async () => {
    render(
      <AppProviderMock>
        <PokemonList />
      </AppProviderMock>
    );

    const pokemonItems = await screen.findAllByTestId("pokemon-item");

    const pokemonItem = pokemonItems[0];

    const useNavigationMock = vi.fn();

    vi.mocked(reactRouterDom.useNavigate).mockImplementation(useNavigationMock);

    pokemonItem.click();

    await vi.waitFor(() => {
      expect(useNavigationMock).toHaveBeenCalled();
    });
  });

  test("should render loading in the beginning", () => {
    render(
      <AppProviderMock>
        <PokemonList />
      </AppProviderMock>
    );

    const loadingElement = screen.findByText(/Loading/i);

    expect(loadingElement).toBeDefined();
  });

  test("should render pokemon items", async () => {
    render(
      <AppProviderMock>
        <PokemonList />
      </AppProviderMock>
    );

    const pokemonItems = await screen.findAllByTestId("pokemon-item");

    expect(pokemonItems.length).toBeGreaterThan(1);
  });
});
