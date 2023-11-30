import { getAnimeData } from "@/lib/utils";

// TODO: generateStaticParams function

const Anime = async ({ params }) => {
    const animeID = params.id;
    const animeData = await getAnimeData(animeID);

    console.log(animeData);

    return (
        <div className='border border-blue-500 min-h-screen pt-28 '>
        </div>
    )
}

export default Anime;
