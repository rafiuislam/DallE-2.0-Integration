import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectDB from "./db/connect.js";
import postRoutes from "./routes/post.js";
import dalleRoutes from "./routes/dalle.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

const connection = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(8000, () => console.log("server running!"));
  } catch (err) {
    console.error(err);
  }
};

connection();
