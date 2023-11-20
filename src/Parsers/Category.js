import createHttpError, { HttpError } from "http-errors";
import axios, { AxiosError } from "axios";
import { load } from "cheerio";
import {
    USER_AGENT_HEADER,
    ACCEPT_ENCODING_HEADER,
    URLs,
    ACCEPT_HEADER
} from '../Utils/constantDATA.js';

async function scrapeCategory(category, page = 1) {
    const res = {
        animes: [],
        genres: [],
        top10Animes: {
          today: [],
          week: [],
          month: []
        },
        category,
        currentPage: Number(page),
        hasNextPage: false,
        totalPages: 1
      };

    try {
    const scrapeUrl = new URL(category, URLs.BASE);
    
    ////////////////////////////////////////
    console.log(scrapeUrl); // for TESTING//
    ////////////////////////////////////////

    const mainPage = await axios.get(`${scrapeUrl}?page=${page}`, {
      headers: {
        "User-Agent": USER_AGENT_HEADER,
        "Accept-Encoding": ACCEPT_ENCODING_HEADER,
        Accept: ACCEPT_HEADER
      }
    });

    const $ = load(mainPage.data);
    const selectora = "#main-content .tab-content .film_list-wrap .flw-item"

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
  
  export default scrapeCategory;
  