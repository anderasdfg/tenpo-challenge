import type { Pokemon } from '@/types/pokemon';

export const getPokemonIdFromUrl = (url: string): number => {
  const parts = url.split('/');
  return parseInt(parts[parts.length - 2]);
};

export const getPokemonImageUrl = (pokemon: Pokemon): string => {
  const id = getPokemonIdFromUrl(pokemon.url);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};
