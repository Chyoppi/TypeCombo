import express from "express";
import { dailyControllers } from "./dailyController";

export const dailyRouter = express.Router();

// Backend route to get the daily challenge
dailyRouter.get("/daily", dailyControllers.dailyChallenge.getDailyChallenge);
