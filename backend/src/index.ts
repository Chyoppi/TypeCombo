import cors from "cors";
import express from "express";
import { dailyRouter } from "./modules/dailygame/dailyRoutes";
import { leaderboardRouter } from "./modules/leaderboard/leaderboardRoutes";
import { sentenceRouter } from "./modules/normalgame/sentenceRoutes";
import { playerRouter } from "./modules/player/playerRoutes";
import { sessionRouter } from "./modules/session/sessionRoutes";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4000", "http://localhost:5173"], // ⚠ For testing only, not for production
  })
);
app.use(express.json());

//Testing endpoint, keeping this here for development
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Routes
app.use("/players", playerRouter);
app.use("/session", sessionRouter);
app.use("/leaderboard", leaderboardRouter);
app.use("/dailychallenge", dailyRouter); // Daily challenge routes
app.use("/sentences", sentenceRouter); // For normal games

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
