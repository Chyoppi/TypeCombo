import { Request, Response } from "express";
import prisma from "../../prisma";

async function getRandomSentenceFromDB(): Promise<string> {
  const sentences = await prisma.sentence.findMany();
  if (sentences.length === 0) {
    throw new Error("No sentences in the database");
  }
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex].text;
}

// Controller to set the daily challenge (can be used by cron or manually)
const setDailyChallenge = async (req: Request, res: Response) => {
  try {
    const text = await getRandomSentenceFromDB();

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const challenge = await prisma.dailyChallenge.upsert({
      where: { date: today },
      update: { text },
      create: { date: today, text },
    });

    res.json({ message: "Daily challenge set", challenge });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to set daily challenge" });
  }
};

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
  setDailyChallenge,
  getDailyChallenge,
};
