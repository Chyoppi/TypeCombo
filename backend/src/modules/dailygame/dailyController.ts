import { Request, Response } from "express";
import prisma from "../../prisma";

function getDailyIndex(total: number): number {
  const today = new Date().toISOString().split("T")[0];

  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = (hash << 5) - hash + today.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % total;
}

// Daily challenge controller (to be implemented)
const dailyChallenge = {
  getDailyChallenge: async (req: Request, res: Response) => {
    try {
      const sentences = await prisma.sentence.findMany();
      if (sentences.length === 0) {
        return res.status(404).json({ error: "No sentences available" });
      }

      const index = getDailyIndex(sentences.length);
      const dailySentence = sentences[index];

      res.json({
        date: new Date().toISOString().split("T")[0],
        sentence: dailySentence,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch daily challenge" });
    }
  },
};

export const dailyControllers = {
  dailyChallenge,
};
