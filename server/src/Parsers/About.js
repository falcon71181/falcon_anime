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
   extractRelatedAnimes,
   extractAboutInfo,
   extractAboutGenre,
   extractSeasonsInfo,
   extractExtraAboutInfo
 } from "../Utils/extractANIME.js";
export async function scrapeAbout(id) {
    const res = {
        info: [],
        moreinfo: [],
        genre: [],
        seasons: [],
        relatedAnimes: [],
        mostPopularAnimes: [],
    }
    const aboutURL = new URL(id, URLs.BASE);
    const mainPage = await axios.get(aboutURL, {
        headers: {
          "User-Agent": USER_AGENT_HEADER,
          "Accept-Encoding": ACCEPT_ENCODING_HEADER,
          Accept: ACCEPT_HEADER,
        },
      });

    const $ = load(mainPage.data);
    const selectors = "#ani_detail .container .anis-content";
    const extraInfoSelector = `${selectors} .anisc-info .item-title`;
    const animeGenreSelector = `${selectors} .anisc-info .item-list a`;
    const seasonsSelectors = ".os-list a.os-item";
    const relatedAnimesSelectors = "#main-sidebar .block_area.block_area_sidebar.block_area-realtime:nth-of-type(1) .anif-block-ul ul li";

    try {
        res.info = extractAboutInfo($, selectors);
        res.moreinfo = extractExtraAboutInfo($, extraInfoSelector);
        res.genre = extractAboutGenre($, animeGenreSelector);
        res.seasons = extractSeasonsInfo($, seasonsSelectors);
        res.relatedAnimes = extractRelatedAnimes($, relatedAnimesSelectors);

        return res;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in scrapeHome:", err); // for TESTING//
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