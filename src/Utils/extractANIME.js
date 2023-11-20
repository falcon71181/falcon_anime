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
    } catch (error) {
        
    }
}