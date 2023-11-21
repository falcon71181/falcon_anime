import { scrapeGenre } from "../Parsers/Genre";

const getGenre = async (req, res) => {
    try {
        const data = await scrapeGenre(req.params.genre, 1);
        res.status(200).json(data);
    } catch (err) {

        ////////////////////////////////////
        console.log(err);   // for TESTING//
        ////////////////////////////////////
        
    }
}

export { getGenre };