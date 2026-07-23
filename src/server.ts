import config from "./config/env.js";
import app from "./app.js";
import connectDB from "./db/connection.js";

const startServer = async () => {
    try {
        await connectDB();

        app.listen(config.port, () => {
            console.log(` Server's running on port ${config.port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();