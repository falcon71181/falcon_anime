import express from "express";
import router from "./Routes/router.js";
import { URLs } from "./Utils/constantDATA.js";
import cors from 'cors';

const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 3001;

app.use(cors());

async function isSiteReachable(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

const isAniwatchUP = await isSiteReachable(URLs.BASE);

app.get("/health", (req, res) => {
  res.status(200).json({
    API: true,
    aniwatch: true === isAniwatchUP
  });
});

app.use("/anime", router);

app.listen(BACKEND_PORT, () => {
    console.log(`⚔️  API @ ON PORT : ${BACKEND_PORT} @ STARTED  ⚔️`);
});
