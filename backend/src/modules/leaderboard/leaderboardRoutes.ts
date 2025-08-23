import express from "express";
import { leaderboardControllers } from "./leaderboardController";

export const leaderboardRouter = express.Router();

// Route for fetching the top 10 players
leaderboardRouter.get(
  "/topten",
  leaderboardControllers.topTenLeaderboard.getTopPlayers
);
