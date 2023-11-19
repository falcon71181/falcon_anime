import createHttpError from "http-errors";
import RequestHandler from "express";
import scrapeCategory from "../Parsers/Category.js";

const getCategory = async (req, res) => {
    try {
        const data = await scrapeCategory("tv",1);

        ////////////////////////////////////
        console.log(data);  // for TESTING//
        ////////////////////////////////////

        res.status(200).send("test worked");
    } catch (err) {

        ////////////////////////////////////
        console.log(err);   // for TESTING//
        ////////////////////////////////////
        
    }
}

export { getCategory };