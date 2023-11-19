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
      
  }
  
  export default scrapeCategory;
  