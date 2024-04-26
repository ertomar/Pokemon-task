import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { AppProviderMock } from "../../mocks/AppProviderMock";
import { pokemonApi } from "../../services/pokemon";
import { appStore } from "../../stores/appStore";
import { act } from "react-dom/test-utils";

describe("Pokemon List", () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.clearAllMocks();
    cleanup();
    appStore.dispatch(pokemonApi.util.resetApiState());
  });

  test("should navigate to pokemon details", async () => {
    const mockedUseNavigate = vi.fn();
    vi.doMock("react-router-dom", async () => {
      const mod = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
      );
      return {
        ...mod,
        useNavigate: mockedUseNavigate,
      };
    });

    render(
      <AppProviderMock>
        <PokemonList />
      </AppProviderMock>
    );

    const pokemonItems = await screen.findAllByTestId("pokemon-item");

    const pokemonItem = pokemonItems[0];

    act(() => {
      pokemonItem.click();
    });

    await vi.waitFor(() => {
      expect(pokemonItems).toBeDefined();
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

    waitFor(() => {
      expect(pokemonItems.length).toBeGreaterThan(1);
    });
  });

  test("should render error", async () => {
    const mockQuery = vi.spyOn(pokemonApi, "useGetPokemonListQuery");

    act(() => {
      mockQuery.mockReturnValue({
        error: "Failed to fetch",
        isLoading: false,
        isError: true,
        data: undefined,
        refetch: vi.fn(),
      });
    });

    render(
      <AppProviderMock>
        <PokemonList />
      </AppProviderMock>
    );

    waitFor(async () => {
      const errorElement = await screen.findByText(/Error/i);
      expect(errorElement).toBeDefined();
    });
  });
});
