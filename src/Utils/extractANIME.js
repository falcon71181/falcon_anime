import createHttpError, { HttpError } from "http-errors";

export const extractAnimes = ($, selectors) => {
    try {
        const animes = [];
        $(selectors).each((index, element) => {

            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1) || null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const noOfSubEps = $(element).find(".film-poster .tick .tick-sub")?.text() || null;
            const noOfDubEps = $(element).find(".film-poster .tick .tick-dub")?.text() || null;
            const totalNoOfEps = $(element).find(".film-poster .tick .tick-eps")?.text() || null;
            const epLengthTime = $(element).find(".film-detail .fd-infor .fdi-duration")?.text()?.trim() ?? "UNKNOWN";
            const adultRated = $(element).find(".film-poster .tick-rate")?.text()?.trim() || null;
            const animeIMG = $(element).find(".film-poster .film-poster-img").attr("data-src") || null;

            animes.push({
                sno: index,
                id: animeID,
                name: animeNAME,
                img: animeIMG,
                sub: noOfSubEps,
                dub: noOfDubEps,
                eps: totalNoOfEps,
                duration: epLengthTime,
                rated: adultRated === "18+",
            });
        })
        return animes;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in extractAnimes :", err); // for TESTING//
        ////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}

export const extractTOP10ANIMES = ($, periodType) => {
    try {
        const animes = [];
        const selectors = `#top-viewed-${periodType} ul li`;

        $(selectors).each((index, element) => {
            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1) || null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const animeRANK = $(element).find(".film-number span")?.text()?.trim() || null;
            const noOfSubEps = $(element).find(".film-detail .fd-infor .tick-item.tick-sub")?.text() || null;
            const noOfDubEps = $(element).find(".film-detail .fd-infor .tick-item.tick-dub")?.text() || null;
            const totalNoOfEps = $(element).find(".film-detail .fd-infor .tick-item.tick-eps")?.text() || null;
            const animeIMG = $(element).find(".film-poster .film-poster-img")?.attr("data-src")?.trim() || null

            animes.push({
                sno: index,
                id: animeID,
                name: animeNAME,
                rank: animeRANK,
                img: animeIMG,
                sub: noOfSubEps,
                dub: noOfDubEps,
                eps: totalNoOfEps,
                });
        }) 
        return animes;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in extractTOP10ANIMES :", err); // for TESTING//
        ////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}

export const extractTrendingAnime = ($, selectors) => {
    try {
        const animes = [];

        $(selectors).each((index, element) => {
            const animeID = $(element).find(".item .film-poster")?.attr("href")?.slice(1) || null;
            const animeNAME = $(element).find(".item .number .film-title.dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const animeIMG = $(element).find(".item .film-poster .film-poster-img")?.attr("data-src")?.trim();

            animes.push({
                sno: index,
                id: animeID,
                name: animeNAME,
                img: animeIMG
            })
        })
        return animes;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in extractTrendingAnime :", err); // for TESTING//
        ////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}

export const extractTopAiringAnimes = ($, selectors) => {
    try {
        const animes = [];

        $(selectors).each((index, element) => {
            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1)?.trim() || null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const animeIMG = $(element).find(".film-poster a .film-poster-img")?.attr("data-src")?.trim();
  
            animes.push({
              sno: index,
              id: animeID,
              name: animeNAME,
              img: animeIMG
            })
          })
        return animes;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in extractTopAiringAnimes :", err); // for TESTING//
        ////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}