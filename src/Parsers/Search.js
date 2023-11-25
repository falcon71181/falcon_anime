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
  extractTOP10ANIMES,
  extractTrendingAnime,
  extractTopAiringAnimes,
  extractSpotLightAnime,
  extractGenreList
} from '../Utils/extractANIME.js';

async function scrapeSearch(query, page) {
    const res = {
        animes: [],
        currentPage: page,
        hasNextPage: false,
        totalPages: 1,
      };

    try {

        const mainPage = await axios.get(
            `${URLs.SEARCH}?keyword=${query}&page=${page}`,
            {
              headers: {
                "User-Agent": USER_AGENT_HEADER,
                "Accept-Encoding": ACCEPT_ENCODING_HEADER,
                Accept: ACCEPT_HEADER,
              },
            }
          );
        const $ = load(mainPage.data);
        console.log(`${URLs.BASE}?keyword=${query}&page=${page}`);
        
        const selectors = "#main-content .tab-content .film_list-wrap .flw-item";

        res.animes = extractAnimes($, selectors);
        
        return res;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in scrapeSearch:", err); // for TESTING//
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

export default scrapeSearch;