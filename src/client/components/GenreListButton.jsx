import Link from "next/link";

const getGenreColor = () => {
    const genreColors = ['#b3ff68', '#d0e6a5', '#ffdb56', '#fc887b', '#ccabda', '#86e3ce', '#d0e6a5', '#d8b2ab', '#00ffb9', '#f98e8e', '#d485ff'];
    const randomIndex = Math.floor(Math.random() * genreColors.length);
    return genreColors[randomIndex];
};

const GenreListButton = ({ genre }) => {
    const slug = genre.split(" ").join("-");
    const url = `genre/${slug.toLowerCase()}`;

    const randomColor = getGenreColor();

    return (
        <Link href={url}>
            <div
                className='transition-colors px-2 py-1 bg-gray-800 rounded-lg hover:bg-gray-700'
                style={{ color: randomColor }}
            >
                {genre}
            </div>
        </Link>
    );
}

export default GenreListButton;
