import Router from "express";
import {
    getCategory
} from '../Controllers/CategoryC.js';

const router = Router()

//  /anime
router.get("/", (_, res) => res.redirect("/"));

//  /anime/category?page=${page}
router.get("/category", getCategory);

export default router;