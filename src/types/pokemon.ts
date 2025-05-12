export interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface UsePokemonDataReturn {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
}

export interface PokemonListProps {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
}
