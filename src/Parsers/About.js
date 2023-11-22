import createHttpError, { HttpError } from "http-errors";
import axios, { AxiosError } from "axios";
import { load } from "cheerio";
import {
    USER_AGENT_HEADER,
    ACCEPT_ENCODING_HEADER,
    URLs,
    ACCEPT_HEADER
} from '../Utils/constantDATA.js';

export async function scrapeAbout(id) {
    const res = {
        info: {
            sno: null,
            id: null,
            name: null,
            img: null,
            description: null,
            rating: null,
            quality: null,
            sub: null,
            dub: null,
            duration: null,
            seasons: [],
            mostPopularAnimes: [],
            relatedAnimes: [],
        }
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
    const seasonsSelectors = "#main-content .os-list a.os-item";
    const mostPopularSelectors = "#main-sidebar .block_area.block_area_sidebar.block_area-realtime:nth-of-type(2) .anif-block-ul ul li";
    const relatedSelectors = "#main-sidebar .block_area.block_area_sidebar.block_area-realtime:nth-of-type(1) .anif-block-ul ul li";

    try {
        
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