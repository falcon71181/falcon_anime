import createHttpError, { HttpError } from "http-errors";
import axios, { AxiosError } from "axios";
import { load } from "cheerio";
import {
    USER_AGENT_HEADER,
    ACCEPT_ENCODING_HEADER,
    URLs,
    ACCEPT_HEADER
} from '../Utils/constantDATA.js';
import {
  extractAnimes,
  extractTOP10ANIMES
} from '../Utils/extractANIME.js';

async function scrapeHome() {
    
    try {
        const mainPage = await axios.get(URLs.HOME, {
            headers: {
              "User-Agent": USER_AGENT_HEADER,
              "Accept-Encoding": ACCEPT_ENCODING_HEADER,
              Accept: ACCEPT_HEADER
            }
        });
        const $ = load(mainPage.data);
        const trendingAnimeSelectors = "#anime-trending #trending-home .swiper-wrapper .swiper-slide";

        $(trendingAnimeSelectors).each((index, element) => {
            const animeID = $(element).find(".item .film-poster")?.attr("href")?.slice(1) || null;
            const animeNAME = $(element).find(".item .number .film-title.dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            
            res.animes.push({
                id: animeID,
                name: animeNAME,
            })
        })
        return res;
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