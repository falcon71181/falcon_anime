import GenreListButton from '@/components/GenreListButton';
import genreList from '@/lib/genreList';
import genreImage from '@/public/genre_list_image.jpeg'
import Image from 'next/image';

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
