import dotenv from "dotenv";

dotenv.config();

const config = {
    port: Number(process.env.PORT) || 5000,

    mongoUri: process.env.MONGO_URI || "",
};

export default config;