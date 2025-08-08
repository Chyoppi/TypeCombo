import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import playerRoutes from "./routes/playerRoutes";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(
  cors({
    origin: "*", // ⚠ For testing only, not for production
  })
);

//Testing endpoint
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Create a new player
app.use("/players", playerRoutes);

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
