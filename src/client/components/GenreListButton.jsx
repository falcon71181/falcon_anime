import Link from "next/link";

const GenreListButton = ({ genre }) => {
    const slug = genre.split(" ").join("-");
    const url = `genre/${slug.toLowerCase()}`;

    return (
        <Link href={url}>
            <div className='transition-colors px-2 py-1 bg-gray-800 rounded-lg hover:bg-gray-700'>{genre}</div>
        </Link>
    )
}

export default GenreListButton;
