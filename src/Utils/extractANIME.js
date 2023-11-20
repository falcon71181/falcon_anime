import { CheerioAPI, SelectorType } from "cheerio";
import createHttpError, { HttpError } from "http-errors";

export const extractAnimes = ($, selectors) => {
    try {
        const animes = [];
        $(selectors).each((index,element) => {

            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";

            animes.push({
                id: index,
                name: animeNAME,
            });
        })
        return animes;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in scrapeCategory:", err); // for TESTING//
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