import express from "express";
import { leaderboardControllers } from "./leaderboardController";

export const leaderboardRouter = express.Router();

// Route for fetching the top 10 players of all time
leaderboardRouter.get(
  "/topten",
  leaderboardControllers.topTenLeaderboard.getTopPlayers
);

// Route for fetching the daily challenge leaderboard
leaderboardRouter.get(
  "/daily",
  leaderboardControllers.dailyLeaderboard.getDailyLeaderBoard
);
