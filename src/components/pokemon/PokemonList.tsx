import type { Pokemon, PokemonListProps } from '@/types/pokemon';
import PokemonCard from '@/components/pokemon/PokemonCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/feedback/ErrorMessage';
import EmptyState from '@/components/feedback/EmptyState';
import EndOfListMessage from '@/components/feedback/EndOfListMessage';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import React, { useCallback } from 'react';

const MemoizedPokemonCard = React.memo(PokemonCard);

const LoadingState = () => (
    <div className="min-h-[50vh] flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading Pokémon data..." />
    </div>
);

const LoadingMoreState = () => (
    <div className="mt-8 flex items-center justify-center">
        <LoadingSpinner message="Loading more Pokémon..." />
    </div>
);

const PokemonList = ({ pokemons, loading, error, hasMore, loadMore }: PokemonListProps) => {
    const lastPokemonRef = useInfiniteScroll({
        loading,
        hasMore,
        onLoadMore: loadMore
    });

    const renderPokemonCard = useCallback((pokemon: Pokemon, index: number, isLastElement: boolean) => {
        return (
            <MemoizedPokemonCard
                key={index}
                pokemon={pokemon}
                ref={isLastElement ? lastPokemonRef : null}
            />
        );
    }, [lastPokemonRef]);

    if (error) {
        return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
    }

    if (pokemons.length === 0 && loading) {
        return <LoadingState />;
    }

    return (
        <div className="p-6 max-w-7xl mx-auto bg-blue-900">
            <h2 className="text-2xl mb-6 text-yellow-400 text-center font-bold">Choose your favorite Pokémon!</h2>

            {pokemons.length > 0 ? (
                <div className="grid grid-cols -2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 bg-blue-900">
                    {pokemons.map((pokemon, index) => {
                        const isLastElement = index === pokemons.length - 1;

                        return renderPokemonCard(pokemon, index, isLastElement);
                    })}
                </div>
            ) : (
                <EmptyState message="No Pokémon found" />
            )}

            {loading && <LoadingMoreState />}

            {!hasMore && !loading && pokemons.length > 0 && (
                <EndOfListMessage count={pokemons.length} />
            )}
        </div>
    );
};

export default PokemonList; 