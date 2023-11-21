import Router from "express";
import {
    getHome,
    getCategory,
    getGenre
} from '../Controllers/Export.js';
import {
    validateCategory,
    validateGenre
} from '../Middleware/Export.js';

const router = Router()

//  /anime/test
router.get("/test", (req,res) => {
    res.send("Worked");
});

//  /anime
router.get("/", (_, res) => res.redirect("/"));

//  /anime/home
router.get("/home", getHome);

//  /anime/:category?page=${page}
router.get("/:category", validateCategory, getCategory);

//  /anime/genre/:genre?page=${page}
router.get("/genre/:genre", validateGenre, getGenre)

export default router;