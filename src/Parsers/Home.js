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
  extractTOP10ANIMES
} from '../Utils/extractANIME.js';

async function scrapeHome() {
    
    try {
        
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