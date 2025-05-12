import PokemonList from '@/components/pokemon/PokemonList';
import { usePokemonData } from '@/hooks/usePokemonData';

const Home = () => {
    const { pokemons, loading, error, hasMore, loadMore } = usePokemonData();

    return (
        <div className="min-h-screen bg-blue-900 flex flex-col">
            <main className="flex-1 py-4">
                <PokemonList
                    pokemons={pokemons}
                    loading={loading}
                    error={error}
                    hasMore={hasMore}
                    loadMore={loadMore}
                />
            </main>
        </div>
    );
};

export default Home; 