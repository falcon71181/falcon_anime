import { CheerioAPI, SelectorType } from "cheerio";
import createHttpError, { HttpError } from "http-errors";

export const extractAnimes = ($, selectors) => {
    try {
        const animes = [];
        $(selectors).each((index,element) => {

            
        })
        return animes;
    } catch (error) {
        
    }
}