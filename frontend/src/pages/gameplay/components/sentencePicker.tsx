import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function useSentencePicker() {
  const [currentSentence, setCurrentSentence] = useState<string>("");

  const getNewSentence = async () => {
    try {
      const res = await fetch(`${API_URL}/sentences/random`);
      if (!res.ok) throw new Error("Failed to fetch sentence");
      const data = await res.json();
      setCurrentSentence(data.text); // backend returns { id, text }
    } catch (err) {
      console.error("Error fetching sentence:", err);
    }
  };

  return { currentSentence, getNewSentence };
}
