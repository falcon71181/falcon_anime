import AnimeCard from "@/components/AnimeCard";
import { genGenreId, getGenreData } from "@/lib/utils";

const genreList = [
    "Action",
    "Adventure",
    "Cars",
    "Comedy",
    "Dementia",
    "Demons",
    "Drama",
    "Ecchi",
    "Fantasy",
    "Game",
    "Harem",
    "Historical",
    "Horror",
    "Isekai",
    "Josei",
    "Kids",
    "Magic",
    "Martial Arts",
    "Mecha",
    "Military",
    "Music",
    "Mystery",
    "Parody",
    "Police",
    "Psychological",
    "Romance",
    "Samurai",
    "School",
    "Sci-Fi",
    "Seinen",
    "Shoujo",
    "Shoujo Ai",
    "Shounen",
    "Shounen Ai",
    "Slice of Life",
    "Space",
    "Sports",
    "Super Power",
    "Supernatural",
    "Thriller",
    "Vampire"
]

const generateStaticParams = () => {
    const genreIds = genGenreId(genreList);
    return genreIds;
}

const Genre = async ({ params }) => {
    // TODO: Do something with error for client UI update
    const genreData = await getGenreData(params.slug);

    return (
        <div className='min-h-screen pt-28 px-10'>
            <h1 className='text-5xl font-bold'>{genreData.title}</h1>
            <div className='grid grid-cols-4 gap-8 gap-y-14 mt-12'>
                {genreData.animes.map(anime => (
                    <AnimeCard key={anime.id} anime={anime} />
                ))}
            </div>
        </div >
    )
}

export { generateStaticParams };
export default Genre;
