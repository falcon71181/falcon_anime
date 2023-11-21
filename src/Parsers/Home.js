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
  extractTopAiringAnimes
} from '../Utils/extractANIME.js';

export async function scrapeHome() {
    const res = {
        trendingAnimes: [],
        top10Animes: {
            today: [],
            week: [],
            month: []
          },
        topAiringAnimes: [],
        topUpcomingAnimes: [],
        genres: [],
    };
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
        const top10Selectors = '#main-sidebar .block_area-realtime [id^="top-viewed-"]';
        const topAiringSelectors = "#anime-featured .row div:nth-of-type(1) .anif-block-ul ul li";
        const topUpcomingSelectors = "#main-content .block_area_home:nth-of-type(3) .tab-content .film_list-wrap .flw-item";

        res.trendingAnimes = extractTrendingAnime($, trendingAnimeSelectors);

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

        res.topAiringAnimes = extractTopAiringAnimes($, topAiringSelectors);
        res.topUpcomingAnimes = extractAnimes($, topUpcomingSelectors);

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