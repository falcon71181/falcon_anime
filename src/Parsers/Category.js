import { HttpError } from "http-errors";
import axios, { AxiosError } from "axios";
import { load, CheerioAPI, SelectorType } from "cheerio";
import {
    USER_AGENT_HEADER,
    ACCEPT_ENCODING_HEADER,
    URLs,
    ACCEPT_HEADER
} from '../Utils/constantDATA';