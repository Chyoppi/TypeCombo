import { Request, Response } from "express";
import prisma from "../../prisma";

const randomSentence = {
  getRandomSentence: async (req: Request, res: Response) => {
    try {
      const count = await prisma.sentence.count();
      if (count === 0) {
        return res.status(404).json({ error: "No sentences available" });
      }

      const skip = Math.floor(Math.random() * count);

      const sentence = await prisma.sentence.findFirst({
        skip,
      });

      res.json(sentence);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch random sentence" });
    }
  },
};

export const sentenceControllers = {
  randomSentence,
};
