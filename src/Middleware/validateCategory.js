import { animeCategories } from "../Models/anime.js";

export const validateCategory = (req, res, next) => {
    const requestedCategory = req.params.category;
    
    if(!animeCategories.includes(requestedCategory)){
        return res.status(404).send("Invalid Category");
    }
    next();
}