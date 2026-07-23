import express from "express";
import helmet from "helmet";
import authRouter from "./modules/auth/auth.route.js";

const app = express();

app.use(helmet())
app.use(express.json())

app.use("/api/v1/auth", authRouter);

app.get("/health", (req, res) => {
  res.status(200).json({
    success:true,
    message:`Everything's good`,
    "data":null
  })
});

export default app;