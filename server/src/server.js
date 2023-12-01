import express from "express";
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import session from 'express-session';
import router from "./Routes/router.js";
import { URLs } from "./Utils/constantDATA.js";
import cors from 'cors';
import configurePassport from "./config/passport.js";
import { mongoURL } from "./config/keys.js";
import fetch from 'node-fetch';

const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 3001;

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('⚔️ MongoDB Connected ⚔️'))
  .catch(err => console.log(err));

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: process.env.SECRET || 'secret',
    resave: false,
    saveUninitialized: false
  })
);

// Initialize Passport and configure it
configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

const corsOptions = {
  origin: [process.env.CLIENT, process.env.SERVER],
  credentials: true,
};

app.use(cors(corsOptions));


// Additional headers to handle redirection
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', process.env.CLIENT);
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });


async function isSiteReachable(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function handleHealthCheck(req, res) {
  const isAniwatchUP = await isSiteReachable(URLs.BASE);

  res.status(200).json({
    API: true,
    aniwatch: true === isAniwatchUP
  });
}

app.get("/health", handleHealthCheck);

app.use("/", router);

app.listen(BACKEND_PORT, () => {
  console.log(`⚔️  API @ ON PORT : ${BACKEND_PORT} @ STARTED  ⚔️`);
});
