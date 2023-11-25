import scrapeSearch from "../Parsers/Search.js";

const getSearch = async (req, res) => {
    try {
        const page = req.query.page ? Number(decodeURIComponent(req.query?.page)) : 1
        const keyword = req.query.keyword;
        const updated_keyword = keyword.replace(/ /g, '+');
        const query = encodeURI(updated_keyword);

        // Now you can use the 'keyword' variable in your logic
        console.log('Search keyword:', keyword);
        console.log('updated:', updated_keyword);
        // console.log('urlencoded:', query);

        const data = await scrapeSearch(updated_keyword, page);
        res.status(200).json(data);
    } catch (err) {

        ////////////////////////////////////
        console.log(err);   // for TESTING//
        ////////////////////////////////////
        
    }
}

export { getSearch };