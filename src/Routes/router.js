import Router from "express";
import {
    getHome,
    getCategory,
    getGenre,
    getAboutInfo,
    getSearch
} from '../Controllers/Export.js';
import {
    validateCategory,
    validateGenre
} from '../Middleware/Export.js';
import { registration } from "../Utils/registerUSER.js";
import { login } from "../Utils/loginUSER.js";

const router = Router()

// /api/register
router.post("/api/register", registration);

// /api/login
router.post('/api/login', login);

// /anime/search?keyword=${query}&page=${page}
router.get("/anime/search", getSearch);

// /anime/:id
router.get("/anime/:id", getAboutInfo);

// /home
router.get("/home", getHome);

// /:category?page=${page}
router.get("/:category", validateCategory, getCategory);

// /genre/:genre?page=${page}
router.get("/genre/:genre", validateGenre, getGenre)

// /
router.get("/", (_, res) => res.redirect("/"));

export default router;