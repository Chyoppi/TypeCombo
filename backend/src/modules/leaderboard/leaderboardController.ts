import { Request, Response } from "express";
import prisma from "./../../prisma";

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

export const leaderboardControllers = {
  topTenLeaderboard,
};
