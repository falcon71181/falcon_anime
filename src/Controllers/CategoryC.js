import createHttpError from "http-errors";
import RequestHandler from "express";
import scrapeCategory from "../Parsers/Category.js";

const getCategory = async (req, res) => {
    try {
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
}

export { getCategory };