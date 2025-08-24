import { useNavigate } from "react-router-dom";

interface HandleInputChangeParams {
  currentSentence: string;
  userInput: string;
  setUserInput: (val: string) => void;
  startTime: number | null;
  setStartTime: (time: number | null) => void;
  mistakes: boolean[];
  setMistakes: (val: boolean[]) => void;
  setWpm: (wpm: number) => void;
  setAccuracy: (acc: number) => void;
  isGameActive: boolean;
  PostScore: (data: {
    playerId: number;
    wpm: number;
    accuracy: number;
    score: number;
  }) => Promise<void>;
  user: { id: number } | null;
  wpm: number;
  accuracy: number;
}

export function useHandleInputChange(params: HandleInputChangeParams) {
  const navigate = useNavigate();

  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentSentence,
      setUserInput,
      setStartTime,
      startTime,
      setMistakes,
      mistakes,
      setWpm,
      setAccuracy,
      isGameActive,
      PostScore,
      user,
      wpm,
      accuracy,
    } = params;

    if (!isGameActive) return;

    const value = e.target.value;
    if (!startTime) setStartTime(Date.now());

    const newMistakes = [...mistakes];
    const upTo = Math.min(value.length, currentSentence.length);

    for (let i = 0; i < upTo; i++) {
      if (value[i] !== currentSentence[i]) {
        newMistakes[i] = true;
      }
    }

    setUserInput(value);
    setMistakes(newMistakes);

    // Accuracy calculation
    const totalChars = currentSentence.length;
    const mistakeCount = newMistakes.filter(Boolean).length;
    const acc = 100 - (mistakeCount / totalChars) * 100;
    setAccuracy(parseFloat(acc.toFixed(2)));

    // WPM calculation
    const timeElapsed = (Date.now() - (startTime ?? 0)) / 60000;
    const words = value.trim().split(" ").length;
    setWpm(Math.round(words / timeElapsed));

    // End game score submission
    if (value === currentSentence) {
      setTimeout(() => {
        const accFactor = accuracy / 100;
        const finalScore = Math.round(wpm * 100 * (1 + accFactor));

        PostScore({
          playerId: user?.id || 0,
          wpm,
          accuracy,
          score: finalScore,
        }).finally(() => navigate("/aftergame"));
      }, 500);
    }
  };
}
