import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const SERVER = '0.0.0.0';

app.listen(PORT, SERVER, () => {
    console.log(`⚔️  API @ http://${SERVER}:${PORT} @ STARTED  ⚔️`);
  });