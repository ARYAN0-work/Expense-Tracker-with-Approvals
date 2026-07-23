import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet())
app.use(express.json())

app.get("/health", (req, res) => {
  res.status(200).json({
    success:true,
    message:`Everything's good`
  })
});

export default app;