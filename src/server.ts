import config from "./config/env.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(config.port, () => {
  console.log(`Server is running on port ${PORT}`);
});