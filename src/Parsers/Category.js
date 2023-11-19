import createHttpError, { HttpError } from "http-errors";
import axios, { AxiosError } from "axios";
import { load, CheerioAPI, SelectorType } from "cheerio";
import {
    USER_AGENT_HEADER,
    ACCEPT_ENCODING_HEADER,
    URLs,
    ACCEPT_HEADER
} from '../Utils/constantDATA';

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
      }

    try {
    const scrapeUrl = new URL(category, URLs.BASE)
    const mainPage = await axios.get(`${scrapeUrl}?page=${page}`, {
      headers: {
        "User-Agent": USER_AGENT_HEADER,
        "Accept-Encoding": ACCEPT_ENCODING_HEADER,
        Accept: ACCEPT_HEADER
      }
    })
    } catch (err) {
    
  }
  }
  
  export default scrapeCategory;
  