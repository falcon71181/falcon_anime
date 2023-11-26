const getHomeData = async () => {
    try {
        const res = await fetch("http://localhost:3001/home")
        const data = await res.json();

        if (res.ok) return data;

        if (!res.ok) {
            console.log(res.status);
            throw new Error(`Some error occured`);
        }
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

const getGenreData = async (genreId) => {
    // TOOD: Change to dynamic origin for prod
    try {
        const res = await fetch(`http://localhost:3001/genre/${genreId}`)
        const data = await res.json();

        if (res.ok) return data;

        if (!res.ok) {
            console.log(res.status);
            throw new Error(`Some error occured`);
        }
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

const genGenreId = (genreList) => {
    const genreIds = genreList.map(genre => {
        const slug = genre.split(" ").join('-');
        return { slug: slug.toLowerCase() };
    })

    return genreIds;
}

const getMovieData = async () => {
    try {
        const res = await fetch(`http://localhost:3001/movie`);
        const data = await res.json();

        if(res.ok) return data;

        if (!res.ok) {
            console.log(res.status);
            throw new Error(`Some error occured`);
        }        
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

const getSearchData = async (query, page) => {
    try {
        const res = await fetch(`http://localhost:3001/anime/search/?keyword=${query}&page=${page}`);
        const data = await res.json();

        if(res.ok) return data;

        if (!res.ok) {
            console.log(res.status);
            throw new Error(`Some error occured`);
        }        
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

export { getHomeData, getGenreData, genGenreId, getMovieData, getSearchData };
