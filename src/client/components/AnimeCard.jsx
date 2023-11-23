import Image from "next/image";
import Link from "next/link";

// TODO: Shift to env var
const CLIENT_BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://future-prod-domain.com';

const AnimeCard = ({ anime }) => {
    return (
        <Link
            key={anime.id}
            href={`${CLIENT_BASE_URL}/anime/${anime.id}`}
            className='group transition-colors rounded-lg bg-gradient-to-b from-stone-900 via-transparent to-stone-900 hover:bg-stone-700'
        >
            <div className='rounded-lg overflow-hidden'>
                <Image
                    className="transition h-[350px] w-[450px] rounded-lg  group-hover:scale-125"
                    src={anime.img}
                    width={350}
                    height={450}
                    alt={`$${anime.name} Image`}
                    objectFit="cover"
                />
            </div>
            <div className='py-5 px-4'>
                <h1 className='truncate text-stone-300 font-bold'>{anime.name}</h1>
                {/* TODO: Add anime type (TV/Mvoie/etc) */}
                <h1 className='text-sm text-stone-400 mt-1.5'>TV • {anime.duration}</h1>
            </div>
        </Link>
    )
}

export default AnimeCard;
