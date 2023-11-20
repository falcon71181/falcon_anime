import createHttpError from "http-errors";
import RequestHandler from "express";
import scrapeCategory from "../Parsers/Category.js";

const getCategory = async (req, res) => {
    try {
        const data = await scrapeCategory("tv",1);
        res.status(200).json(data);
    } catch (err) {

        ////////////////////////////////////
        console.log(err);   // for TESTING//
        ////////////////////////////////////
        
    }
}

export { getCategory };