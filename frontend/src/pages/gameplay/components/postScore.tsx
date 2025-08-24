const API_URL = import.meta.env.VITE_API_URL;
import type { PostScoreProps } from "../../../types/gameplayTypes";

async function PostScore({ playerId, wpm, accuracy, score }: PostScoreProps) {
  try {
    const res = await fetch(`${API_URL}/session/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId, wpm, accuracy, score }),
    });

    if (!res.ok) {
      throw new Error(`Failed to post score: ${res.status}`);
    }

    const data = await res.json();
    console.log("Score saved:", data); // Delete this in production
  } catch (err) {
    console.error("Error posting score:", err);
  }
}
export { PostScore };
