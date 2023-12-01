const getHomeData = async () => {
    try {
        const res = await fetch(`${NEXT_PUBLIC_SERVER}/home`)
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
        const res = await fetch(`${NEXT_PUBLIC_SERVER}/genre/${genreId}`)
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
        const res = await fetch(`${NEXT_PUBLIC_SERVER}/movie`);
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

const getSearchData = async (query, page) => {
    try {
        const res = await fetch(`${NEXT_PUBLIC_SERVER}/anime/search/?keyword=${query}&page=${page}`);
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

const getAnimeData = async (animeId) => {
    try {
        const res = await fetch(`${NEXT_PUBLIC_SERVER}/anime/${animeId}`);
        const data = await res.json();

        if (res.ok) return data;

        if (!res.ok) {
            console.log(res.status);
            throw new Error('Some error occured fetching anime data');
        }
    } catch (error) {
        console.error(error);
        console.log('')
        throw error;
    }
}

const arrayToObject = (array) => {
    const initialObject = {};

    // TODO: Rather do this in server (Utils/extrackANIME/extractExtraAboutInfo)
    const resObject = array.reduce((completeObject, currentObject) => {
        const currentObjectKey = Object.keys(currentObject)[0].slice(0, -1);
        
        return { ...completeObject, [currentObjectKey]: currentObject[`${currentObjectKey}:`] };
    }, initialObject)

    return resObject;
}

export {
    getHomeData,
    getGenreData,
    genGenreId,
    getMovieData,
    getSearchData,
    getAnimeData,
    arrayToObject
};
