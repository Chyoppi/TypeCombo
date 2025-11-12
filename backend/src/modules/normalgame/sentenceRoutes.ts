import express from "express";
import { sentenceControllers } from "../normalgame/sentenceController";

export const sentenceRouter = express.Router();

// Backend route for normal games
sentenceRouter.get(
  "/random",
  sentenceControllers.randomSentence.getRandomSentence
);
