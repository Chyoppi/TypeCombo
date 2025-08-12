import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sessionScore = async (req: Request, res: Response) => {
  const { playerId, accuracy, wpm, combo, score } = req.body;
  try {
    const session = await prisma.session.create({
      data: { playerId, accuracy, wpm, combo, score },
    });
    res.json(session);
  } catch (e) {
    res.status(400).json({ error: "Failed to create session" });
  }
};

export const sessionControllers = {
  sessionScore,
};
