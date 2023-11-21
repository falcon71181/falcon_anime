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
    extractTopAiringAnimes,
    extractGenreList
} from "../Utils/extractANIME.js";

export async function scrapeGenre(genre, page) {
    const res = {
        title: "",
        animes: [],
        topAiringAnimes: [],
        genre: [],
        totalPages: 1,
        hasNextPage: false,
        currentPage: Number(page),
    }

    try {
        const genreURL = new URL(`${URLs.GENRE}/${genre}`);
        const mainPage = await axios.get(`${genreURL}?page=${page}`, {
        headers: {
          "User-Agent": USER_AGENT_HEADER,
          "Accept-Encoding": ACCEPT_ENCODING_HEADER,
          Accept: ACCEPT_HEADER
        }
    });

    const $ = load(mainPage.data);

    const genreTitleSelectors = "#main-content .block_area .block_area-header .cat-heading";
    const selectors = "#main-content .tab-content .film_list-wrap .flw-item";
    const topAiringSelectors = "#main-sidebar .block_area.block_area_sidebar.block_area-realtime .anif-block-ul ul li";
    const genreSelectors = "#main-sidebar .block_area.block_area_sidebar.block_area-genres .sb-genre-list li";

    res.title = $(genreTitleSelectors)?.text()?.trim() ?? genre;
    res.animes = extractAnimes($, selectors);
    res.topAiringAnimes = extractTopAiringAnimes($, topAiringSelectors);
    res.genre = extractGenreList($, genreSelectors);
    
    return res;
} catch (err) {

    ////////////////////////////////////////////////////////////////
    console.error("Error in scrapeGenre:", err); // for TESTING//
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