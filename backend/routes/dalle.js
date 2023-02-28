import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello Dalle" });
});

// getting image from openai
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const Response = await openai.createImage({
      prompt,
      n: 1,
      size: "512x512",
      response_format: "b64_json",
    });
    const image = Response.data.data[0].b64_json;
    res.status(200).json({
      photo: image,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "something went wrong");
  }
});

export default router;
