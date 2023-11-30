import { arrayToObject, getAnimeData } from "@/lib/utils";
import Image from "next/image";

// TODO: generateStaticParams function

const Anime = async ({ params }) => {
    const animeID = params.id;
    const fetchedData = await getAnimeData(animeID);

    const animeInfo = fetchedData.info[0];
    const animeMoreInfo = arrayToObject(fetchedData.moreinfo);

    return (
        <div className='border border-blue-500 min-h-screen pt-28 flex justify-center items-center'>
            <div className='flex h-full'>
                <div className='border border-red-500 w-4/5 flex gap-14'>
                    <Image
                        className='h-60 w-60'
                        src={animeInfo.img}
                        placeholder="empty"
                        width={350}
                        height={200}
                    />

                    <div className='border border-pink-500 flex flex-col gap-8 w-full'>
                        <h1 className='text-5xl font-bold'>{animeInfo.name}</h1>

                        <div className='flex items-center gap-3.5'>
                            <div className='flex gap-1 text-xs font-bold'>
                                <h1 className='py-1 px-2 bg-white/90 text-black w-fit rounded-l-sm'>{animeInfo.rating}</h1>
                                <h1 className='py-1 px-2 bg-yellow-300 text-black w-fit'>{animeInfo.quality}</h1>
                                <h1 className='py-1 px-2 bg-green-300 text-black w-fit'>{animeInfo.sub}</h1>
                            </div>
                            <div className='h-1 w-1 rounded-full bg-white/80 inline-block'></div>
                            <h1 className='text-sm'>{animeInfo.category} {animeInfo.duration}</h1>
                        </div>

                        <div className='text-lg text-black flex gap-3 text-semibold'>
                            <div className='h-10 py-3 px-4 bg-yellow-300 rounded-3xl cursor-pointer flex items-center gap-2'>
                                <div className='rotate-90 inline-block'>&#x25B2;</div>
                                <h1>Watch now</h1>
                            </div>
                            <div className='h-10 py-3 px-4 bg-white/90 rounded-3xl cursor-pointer flex items-center gap-2'>
                                <div className='inline-block'>&#x271A;</div>
                                <h1>Add to List</h1>
                            </div>
                        </div>

                        <h1 className='text-sm font-white/90'>{animeInfo.description}</h1>

                        <h1 className='text-sm font-white/90'>F X Ani-Watch is the best site to watch {animeInfo.name} SUB online, or you can even watch {animeInfo.name} DUB in {animeInfo.quality} quality. You can also find {animeMoreInfo.Studios} anime on F X Ani-Watch website.</h1>
                        </div>
                    </div>
                    <div className='border border-green-500 w-1/5'>
                    </div>
                </div>
            </div>
            )
}

            export default Anime;
