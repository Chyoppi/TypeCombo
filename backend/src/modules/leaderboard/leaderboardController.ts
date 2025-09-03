import { Request, Response } from "express";
import prisma from "./../../prisma";

// Top ten players of all time controller
const topTenLeaderboard = {
  getTopPlayers: async (req: Request, res: Response) => {
    try {
      const topPlayers = await prisma.session.findMany({
        orderBy: { score: "desc" },
        take: 10,
        select: {
          player: {
            select: {
              username: true,
            },
          },
          score: true,
        },
      });
      res.json(topPlayers);
    } catch (e) {
      res.status(500).json({ error: "Failed to fetch leaderboard" });
    }
  },
};

// Daily challenge leaderboard controller. Changes daily at midnight.
const dailyLeaderboard = {
  getDailyLeaderBoard: async (req: Request, res: Response) => {
    try {
      const dailyPlayers = await prisma.session.findMany({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999)),
          },
          daily: true,
        },
        orderBy: { score: "desc" },
        take: 10,
        select: {
          player: {
            select: {
              username: true,
            },
          },
          score: true,
        },
      });
      res.json(dailyPlayers);
    } catch (e) {
      res.status(500).json({ error: "Failed to fetch daily leaderboard" });
    }
  },
};

export const leaderboardControllers = {
  topTenLeaderboard,
  dailyLeaderboard,
};
