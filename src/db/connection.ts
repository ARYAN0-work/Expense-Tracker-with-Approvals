import mongoose from "mongoose";
import config from "../config/env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB not Connected ");
    process.exit(1);
  }
};

export default connectDB;