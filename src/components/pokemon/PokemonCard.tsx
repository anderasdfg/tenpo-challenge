import { forwardRef } from 'react';
import type { Pokemon } from '@/types/pokemon';
import { getPokemonIdFromUrl, getPokemonImageUrl } from '@/utils/pokemon.utils';

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard = forwardRef<HTMLDivElement, PokemonCardProps>(
    ({ pokemon }, ref) => {
        const pokemonId = getPokemonIdFromUrl(pokemon.url);

        return (
            <div
                ref={ref}
                className="bg-blue-200 rounded-lg overflow-hidden shadow hover:shadow-md hover:-translate-y-1 transition"
            >
                <div className="bg-blue-50 p-4 flex justify-center">
                    <img
                        src={getPokemonImageUrl(pokemon)}
                        alt={pokemon.name}
                        className="w-[120px] h-[120px] object-contain sm:w-[100px] sm:h-[100px] xs:w-[80px] xs:h-[80px]"
                        loading="lazy"
                    />
                </div>
                <div className="p-4">
                    <span className="text-sm text-slate-500 block mb-1">#{pokemonId}</span>
                    <h3 className="text-lg text-slate-800 capitalize m-0">{pokemon.name}</h3>
                </div>
            </div>
        );
    }
);

export default PokemonCard; 