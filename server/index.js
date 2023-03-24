import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3030;

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello from DALL-E");
});

(async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server has started on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Couldn't connect error :- ${error.message}`);
  }
})();
