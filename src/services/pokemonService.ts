import api from '@/services/api';
import type { PokemonListResponse } from '@/types/pokemon';

const DEFAULT_LIMIT = 20;

export const fetchPokemons = async (
  limit: number = DEFAULT_LIMIT,
  offset: number = 0
): Promise<PokemonListResponse> => {
  const response = await api.get<PokemonListResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data;
};
