const API_URL = import.meta.env.VITE_API_URL;

interface PostScoreProps {
  playerId: number | null; // playerId null if not logged in
  wpm: number;
  accuracy: number;
}

async function PostScore({ playerId, wpm, accuracy }: PostScoreProps) {
  try {
    const res = await fetch(`${API_URL}/session/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId, wpm, accuracy }),
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
