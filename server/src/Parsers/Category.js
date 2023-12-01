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
  extractGenreList
} from '../Utils/extractANIME.js';

async function scrapeCategory(category, page = 1) {
    const res = {
        animes: [],
        top10Animes: {
          today: [],
          week: [],
          month: []
        },
        genres: [],
        category,
        currentPage: Number(page),
        hasNextPage: false,
        totalPages: 1
      };

    try {
    const scrapeUrl = new URL(category, URLs.BASE);
    
    ////////////////////////////////////////
    //console.log(scrapeUrl); // for TESTING//
    ////////////////////////////////////////

    const mainPage = await axios.get(`${scrapeUrl}?page=${page}`, {
      headers: {
        "User-Agent": USER_AGENT_HEADER,
        "Accept-Encoding": ACCEPT_ENCODING_HEADER,
        Accept: ACCEPT_HEADER
      }
    });

    const $ = load(mainPage.data);
    const selectors = "#main-content .tab-content .film_list-wrap .flw-item";
    const categorySelectors = "#main-content .block_area .block_area-header .cat-heading";
    const top10Selectors = '#main-sidebar .block_area-realtime [id^="top-viewed-"]';
    const genresSelectors = "#main-sidebar .block_area.block_area_sidebar.block_area-genres .sb-genre-list li";
    
    res.category =$(categorySelectors)?.text()?.trim() ?? category;
    res.animes = extractAnimes($, selectors);
    res.genres = extractGenreList($, genresSelectors);
    
    $(top10Selectors).each((index, element) => {
      const periodType = $(element).attr("id")?.split("-")?.pop()?.trim();
      if (periodType === "day") {
        res.top10Animes.today = extractTOP10ANIMES($, periodType);
        return;
      }
      if (periodType === "week") {
        res.top10Animes.week = extractTOP10ANIMES($, periodType);
        return;
      }
      if (periodType === "month") {
        res.top10Animes.month = extractTOP10ANIMES($, periodType);
      }
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
  
  export default scrapeCategory;
  