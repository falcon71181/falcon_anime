import { scrapeHome } from "../Parsers/Home.js";

const getHome = async (req, res) => {
    try {
        const data = await scrapeHome();
        res.status(200).json(data);
    } catch (err) {

        ////////////////////////////////////
        console.log(err);   // for TESTING//
        ////////////////////////////////////
        
    }
}

export { getHome };