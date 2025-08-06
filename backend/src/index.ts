import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Create a new player
app.post("/players", async (req, res) => {
  const { username } = req.body;
  try {
    const player = await prisma.player.create({ data: { username } });
    res.json(player);
  } catch (e) {
    res.status(400).json({ error: "Username already exists" });
  }
});

// Add a typing session
app.post("/sessions", async (req, res) => {
  const { playerId, accuracy, wpm, combo, score } = req.body;
  try {
    const session = await prisma.session.create({
      data: { playerId, accuracy, wpm, combo, score },
    });
    res.json(session);
  } catch (e) {
    res.status(400).json({ error: "Failed to create session" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
