import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/connect.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

const connection = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(8000, () => console.log("server running!"));
  } catch (err) {
    console.error(err);
  }
};

connection();
