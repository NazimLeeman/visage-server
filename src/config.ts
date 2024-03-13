import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT ?? 4000,
    CORS_ORIGIN: process.env.CORS_ORIGIN ?? "*",
}

export default config;