import { scrapeAbout } from "../Parsers/About.js";

const getAboutInfo = async (req, res) => {
    try {
        const data = await scrapeAbout(req.params.id);
        res.status(200).json(data);

    } catch (err) {

        ////////////////////////////////////
        console.log(err);   // for TESTING//
        ////////////////////////////////////
        
    }
}

export {getAboutInfo};