import { Request, Response } from "express";
import prisma from "../../prisma";

const getDailyChallenge = async (req: Request, res: Response) => {
  try {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const challenge = await prisma.dailyChallenge.findUnique({
      where: { date: today },
    });

    if (!challenge) {
      return res.status(404).json({ error: "No daily challenge found" });
    }

    res.json(challenge);
  } catch (err) {
    console.error("Error fetching daily challenge:", err);
    res.status(500).json({ error: "Failed to fetch daily challenge" });
  }
};

export const dailyControllers = {
  getDailyChallenge,
};
