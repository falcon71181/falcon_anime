import express from "express";
import router from "./Routes/router.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const SERVER = '0.0.0.0';

app.get("/test", (req, res) => {
  res.send("Worked");
});

app.use("/anime", router);

app.listen(PORT, SERVER, () => {
    console.log(`⚔️  API @ http://${SERVER}:${PORT} @ STARTED  ⚔️`);
});
