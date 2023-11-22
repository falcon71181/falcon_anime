import genereList from '@/lib/genreList';

const Genre = () => {
    return (
        <div className='min-h-screen pt-28 px-10 text-center'>
            <h1 className='text-5xl font-bold'>Genre List</h1>
            <div className='flex flex-wrap mt-12 gap-5'>
                {genereList.map((genre, index) => (
                    <div key={index}>{genre}</div>
                ))}
            </div>
        </div>
    )
}

export default Genre;
