import { arrayToObject, getAnimeData } from "@/lib/utils";
import Image from "next/image";

// TODO: generateStaticParams function

const Anime = async ({ params }) => {
    const animeID = params.id;
    const fetchedData = await getAnimeData(animeID);

    const animeInfo = fetchedData.info[0];
    const animeMoreInfo = arrayToObject(fetchedData.moreinfo);
    const animeGenres = fetchedData.genre;

    // TODO: Maybe shift somewhere else
    const sideBarElements = [];
    for (const property in animeMoreInfo) {
        if (animeMoreInfo[property] !== '') {
            sideBarElements.push(<h1><span className='font-bold'>{property}:</span> {animeMoreInfo[property]}</h1>)

            if (property === 'MAL Score') {
                const genreSection = <div className='text-sm font-light space-y-2'>
                    <div className='border border-gray-800'></div>

                    <div>
                        <span className='font-bold mr-1.5'>Genres: {' '}</span>
                        {animeGenres.map((genre, index) => (
                            <div key={index} className='border inline-block border-gray-700 rounded-full px-2 py-1 text-xs mr-1 my-1'>{genre}</div>
                        ))}
                    </div>

                    <div className='border border-gray-800'></div>
                </div>

                sideBarElements.push(genreSection);
            }
        }
    }

    return (
        <div className='min-h-screen pt-40'>
            <div className='py-12 flex h-full bg-gradient-to-r from-transparent via-gray-800 to-transparent'>
                <div className='w-3/4 flex gap-14 border-r border-r-gray-500 pr-10'>
                    <Image
                        className='h-60 w-60'
                        src={animeInfo.img}
                        placeholder="empty"
                        width={350}
                        height={200}
                    />

                    <div className='flex flex-col gap-8 w-full'>
                        <h1 className='text-5xl font-bold'>{animeInfo.name}</h1>

                        <div className='flex items-center gap-3.5'>
                            <div className='flex gap-1 text-xs font-bold'>
                                <h1 className='h-5 inline-flex justify-center items-center py-1 px-2 bg-white/90 text-black w-fit rounded-l-sm'>{animeInfo.rating}</h1>
                                <h1 className='h-5 inline-flex justify-center items-center py-1 px-2 bg-yellow-300 text-black w-fit'>{animeInfo.quality}</h1>
                                <h1 className='h-5 inline-flex justify-center items-center py-1 px-2 bg-green-300 text-black w-fit'>{animeInfo.sub}</h1>
                            </div>
                            <div className='h-1 w-1 rounded-full bg-white/80 inline-block'></div>
                            <h1 className='text-sm'>{animeInfo.duration}</h1>
                        </div>

                        <div className='text-lg text-black flex gap-3 text-semibold'>
                            <div className='h-10 py-3 px-4 bg-yellow-300 rounded-full cursor-pointer flex items-center gap-2'>
                                <div className='rotate-90 inline-block'>&#x25B2;</div>
                                <a href="/unknown"><h1 className="no-underline text-black">Watch now</h1></a>
                            </div>
                            <div className='h-10 py-3 px-4 bg-white/90 rounded-full cursor-pointer flex items-center gap-2'>
                                <div className='inline-block'>&#x271A;</div>
                                <a href="/unknown"><h1 className="no-underline text-black">Add to List</h1></a>
                            </div>
                        </div>

                        <h1 className='text-sm font-white/90'>{animeInfo.description}</h1>

                        <h1 className='text-sm font-white/90'>F X Ani-Watch is the best site to watch {animeInfo.name} SUB online, or you can even watch {animeInfo.name} DUB in {animeInfo.quality} quality. You can also find {animeMoreInfo.Studios} anime on F X Ani-Watch website.</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center w-1/4 border-l border-l-gray-500 pl-7'>
                    <div className='text-sm font-light space-y-2'>
                        {sideBarElements.map((element, index) => <div key={index}>{element}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anime;
