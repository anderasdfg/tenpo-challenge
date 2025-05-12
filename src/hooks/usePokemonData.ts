import { useState, useEffect, useCallback } from 'react';
import { fetchPokemons } from '@/services/pokemonService';
import type { Pokemon, UsePokemonDataReturn } from '@/types/pokemon';

const DEFAULT_PAGE_SIZE = 50;

/**
 * Custom hook for fetching and managing Pokemon data with pagination
 *
 * @param initialLimit - Number of Pokemon to load initially
 * @returns UsePokemonDataReturn object with Pokemon data and controls
 */
export const usePokemonData = (
  initialLimit = DEFAULT_PAGE_SIZE
): UsePokemonDataReturn => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const fetchInitialPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchPokemons(initialLimit, 0);
      setPokemons(response.results);
      setTotalCount(response.count);
      setOffset(initialLimit);
      setHasMore(initialLimit < response.count);
    } catch (err) {
      setError('Failed to fetch Pokemon data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [initialLimit]);

  useEffect(() => {
    fetchInitialPokemons();
  }, [fetchInitialPokemons]);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const limit = DEFAULT_PAGE_SIZE;
      const response = await fetchPokemons(limit, offset);

      setPokemons((prevPokemons) => [...prevPokemons, ...response.results]);
      setOffset((prevOffset) => prevOffset + limit);

      setHasMore(offset + limit < totalCount);
    } catch (err) {
      setError('Failed to fetch more Pokemon data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, offset, totalCount]);

  return { pokemons, loading, error, hasMore, loadMore };
};
