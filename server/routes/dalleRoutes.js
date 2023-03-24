import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
});

const openai = new OpenAIApi(configuration);

router
  .route("/")
  .get((req, res) => {
    console.count(`Dall-E accepting get request`);
    res.status(200).json({ message: "Hello from OpenAI DALL-E!" });
  })
  .post(async (req, res) => {
    console.count(`Dall-E generating image request`);
    try {
      const { prompt } = req.body;

      const aiResponse = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      });

      const image = aiResponse?.data?.data?.[0].b64_json;
      res.status(200).json({ photo: image });
    } catch (error) {
      console.count("Filed to generating image");
      res
        .status(500)
        .send(error?.response?.data?.error?.message || "Something went wrong");
    }
  });

export default router;
