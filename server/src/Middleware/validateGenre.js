import { animeGenres } from "../Models/anime.js";

export const validateGenre = (req, res, next) => {
    const requestedGenre = req.params.genre;

    if(!animeGenres.includes(requestedGenre)){
        return res.status(404).send("Invalid Genre")
    }
    next();
}