import dotenv from 'dotenv';
dotenv.config();

const mongoURL = process.env.SERVER_URL;

export { mongoURL };
