import { useState, useCallback } from "react";
import sentencesData from "../data/randomSentence.json";

export const useSentencePicker = () => {
  const [currentSentence, setCurrentSentence] = useState("");

  const getNewSentence = useCallback(() => {
    const sentences = sentencesData.sentencesData;
    if (sentences && sentences.length > 0) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      setCurrentSentence(sentences[randomIndex]);
      return sentences[randomIndex];
    }
    return "Failed to load TypeCombo game.";
  }, []);

  return { currentSentence, getNewSentence };
};
