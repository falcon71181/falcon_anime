import scrapeSearch from "../Parsers/Search.js";

const getSearch = async (req, res) => {
    try {
        const page = req.query.page ? Number(decodeURIComponent(req.query?.page)) : 1
        const keyword = req.query.keyword.replace(/ /g, '+');

        const data = await scrapeSearch(keyword, page);
        res.status(200).json(data);
    } catch (err) {

        ////////////////////////////////////
        console.log(err);   // for TESTING//
        ////////////////////////////////////
        
    }
}

export { getSearch };