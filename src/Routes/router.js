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
    validateGenre,
    ensureAuthenticated, 
    validAuthentication
} from '../Middleware/Export.js';
import { registration } from "../Utils/registerUSER.js";
import { login } from "../Utils/loginUSER.js";
import { retrieveLoggedInUserData } from "../Parsers/UserData.js";
import { logOut } from "../Utils/logOutUSER.js";

const router = Router()

//  /valid
router.get("/valid", validAuthentication);

//  /api/register
router.post("/api/register", registration);

//  /api/login
router.post("/api/login", login);

//  /api/logout
router.post('/api/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.status(200).json({sessionEnd: true});
    });
  });

//  /profile
router.get("/profile", ensureAuthenticated, retrieveLoggedInUserData);

//  /anime/search?keyword=${query}&page=${page}
router.get("/anime/search", getSearch);

//  /anime/:id
router.get("/anime/:id", getAboutInfo);

//  /home
router.get("/home", getHome);

//  /:category?page=${page}
router.get("/:category", validateCategory, getCategory);

//  /genre/:genre?page=${page}
router.get("/genre/:genre", validateGenre, getGenre)

export default router;