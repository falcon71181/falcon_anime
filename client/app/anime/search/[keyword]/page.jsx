import AnimeCard from "@/components/AnimeCard";
import { getSearchData } from '@/lib/utils';

const SearchPage = async ({ params }) => {
  const query = decodeURIComponent(params.keyword);
  const searchData = await getSearchData(query, 1);

  return (
    <div className='min-h-screen pt-28 px-10'>
            <span className='text-5xl font-bold'>Search results for: </span>
            <span className='text-3xl text-slate-300'>{query.replace(/\+/g, ' ')}</span>
            <div className='grid grid-cols-4 gap-8 gap-y-14 mt-12'>
                {searchData.animes.map(anime => (
                    <AnimeCard key={anime.id} anime={anime} />
                ))}
            </div>
    </div>
  );
};

export default SearchPage;