import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function useDailySentencePicker() {
  const [currentSentence, setCurrentSentence] = useState<string>("");

  const getDailyChallenge = async () => {
    try {
      const res = await fetch(`${API_URL}/dailychallenge/daily`);
      if (!res.ok) throw new Error("Failed to fetch daily sentence");
      const data = await res.json();
      setCurrentSentence(data.text);
    } catch (err) {
      console.error("Error fetching daily challenge sentence:", err);
    }
  };

  return { currentSentence, getDailyChallenge };
}
