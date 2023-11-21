import createHttpError, { HttpError } from "http-errors";
import axios, { AxiosError } from "axios";
import { load } from "cheerio";
import {
    USER_AGENT_HEADER,
    ACCEPT_ENCODING_HEADER,
    URLs,
    ACCEPT_HEADER
} from '../Utils/constantDATA.js';

export async function scrapeGenre(genre, page) {
    const res = {
        title: "",
        animes: [],
        topAiringAnimes: [],
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

    res.title = $(genreTitleSelectors)?.text()?.trim() ?? genre;
    
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