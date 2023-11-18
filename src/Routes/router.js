import Router from "express";

const router = Router()

// /anime
router.get("/", (_, res) => res.redirect("/"));

export default router;