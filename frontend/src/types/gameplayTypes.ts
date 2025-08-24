// Gameplay folders types

// Handles the input changes
export interface HandleInputChangeParams {
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

// Props for colored sentence component
export interface ColoredSentenceProps {
  currentSentence: string;
  userInput: string;
}

// Props for posting the score
export interface PostScoreProps {
  playerId: number | null; // playerId null if not logged in
  wpm: number;
  accuracy: number;
  score: number;
}
