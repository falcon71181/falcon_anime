import AnimeCard from "@/components/AnimeCard";
import { getMOvieData } from "@/lib/utils";

const Movie = async () => {

    const movieData = await getMOvieData();

    return (
        <div className='min-h-screen pt-28 px-10'>
            <h1 className='text-5xl font-bold'>Movies</h1>
            <div className='grid grid-cols-4 gap-8 gap-y-14 mt-12'>
                {movieData.animes.map(anime => (
                    <AnimeCard key={anime.id} anime={anime} />
                ))}
            </div>
        </div>
    )
}

export default Movie;
