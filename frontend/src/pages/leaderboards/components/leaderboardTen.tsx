import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { LeaderboardEntry } from "../../../types/leaderboardTypes";
const API_URL = import.meta.env.VITE_API_URL;

export function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/leaderboard/topten`)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, []);

  return (
    <motion.div
      className="p-6 bg-gray-900 text-white rounded-xl font-mono"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.0, ease: "easeOut" }}
    >
      <h1 className="text-4xl mb-4">Leaderboard</h1>
      <ol className="space-y-2">
        {entries.map((entry, i) => (
          <motion.li
            key={entry.id}
            className="flex justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, duration: 1.5 }}
          >
            <span>
              {i + 1}. {entry.player.username}
            </span>
            <span>{entry.score}</span>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
