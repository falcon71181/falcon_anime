import Router from "express";
import {
    getCategory
} from '../Controllers/CategoryC.js';
import {
    validateCategory
} from '../Middleware/validateCategory.js';

const router = Router()

//  /anime/test
router.get("/test", (req,res) => {
    res.send("Worked");
});

//  /anime
router.get("/", (_, res) => res.redirect("/"));

//  /anime/category?page=${page}
router.get("/:category", validateCategory, getCategory);

export default router;