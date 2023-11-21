import express from "express";
import router from "./Routes/router.js";
import { URLs } from "./Utils/constantDATA.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const SERVER = '0.0.0.0';

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

app.listen(PORT, SERVER, () => {
    console.log(`⚔️  API @ http://${SERVER}:${PORT} @ STARTED  ⚔️`);
});
