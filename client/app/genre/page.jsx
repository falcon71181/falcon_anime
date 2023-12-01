import GenreListButton from '@/components/GenreListButton';
import genreImage from '@/public/genre_list_image.jpeg'
import Image from 'next/image';

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

const GenreList = () => {
    return (
        <div className='min-h-screen pt-28 px-10'>
            <h1 className='text-5xl font-bold'>Genre List</h1>
            <div className='flex flex-wrap mt-12 gap-5'>
                {genreList.map((genre, index) => (
                    <GenreListButton key={index} genre={genre} />
                ))}
            </div>
            <Image
                className='mt-12 rounded-xl h-96'
                src={genreImage}
            />
        </div>
    )
}

export default GenreList;
