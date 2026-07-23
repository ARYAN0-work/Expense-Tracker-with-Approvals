import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Everything's good");
});

export default app;