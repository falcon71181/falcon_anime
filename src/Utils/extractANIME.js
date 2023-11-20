import createHttpError, { HttpError } from "http-errors";

export const extractAnimes = ($, selectors) => {
    try {
        const animes = [];
        $(selectors).each((index, element) => {

            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1) ?? null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const noOfSubEps = $(element).find(".film-poster .tick .tick-sub")?.text() ?? null;
            const noOfDubEps = $(element).find(".film-poster .tick .tick-dub")?.text() ?? null;
            const totalNoOfEps = $(element).find(".film-poster .tick .tick-eps")?.text() ?? null;
            const epLengthTime = $(element).find(".film-detail .fd-infor .fdi-duration")?.text()?.trim() ?? "UNKNOWN";

            animes.push({
                sno: index,
                id: animeID,
                name: animeNAME,
                sub: noOfSubEps,
                dub: noOfDubEps,
                eps: totalNoOfEps,
                duration: epLengthTime
            });
        })
        return animes;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in scraping ANIME Details :", err); // for TESTING//
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
            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1) ?? null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";

            animes.push({
                sno: index,
                id: animeID,
                name: animeNAME,
            });
        }) 
        return animes;
    } catch (error) {
        
    }
}