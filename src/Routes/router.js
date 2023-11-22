import Router from "express";
import {
    getHome,
    getCategory,
    getGenre,
    getAboutInfo
} from '../Controllers/Export.js';
import {
    validateCategory,
    validateGenre
} from '../Middleware/Export.js';

const router = Router()


//  /
router.get("/", (_, res) => res.redirect("/"));

//  /home
router.get("/home", getHome);

//  /anime/:id
router.get("/anime/:id", getAboutInfo);

//  /:category?page=${page}
router.get("/:category", validateCategory, getCategory);

//  /genre/:genre?page=${page}
router.get("/genre/:genre", validateGenre, getGenre)

export default router;