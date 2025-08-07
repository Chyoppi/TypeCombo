import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function GameScreen() {
  const [currentSentence, setCurrentSentence] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const sentences = [
    "Prometheus stole fire from the gods and gave it to man",
    "For this, he was chained to a rock and tortured for eternity",
  ];

  useEffect(() => {
    setCurrentSentence(sentences[sentenceIndex]);
    setUserInput("");
    setStartTime(null);
    inputRef.current?.focus();
  }, [sentenceIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!startTime) setStartTime(Date.now());

    setUserInput(value);

    // Accuracy calculation
    let correct = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === currentSentence[i]) correct++;
    }
    const acc = (correct / value.length) * 100 || 0;
    setAccuracy(parseFloat(acc.toFixed(2)));

    // WPM calculation
    const timeElapsed = (Date.now() - (startTime ?? 0)) / 60000; // in minutes
    const words = value.trim().split(" ").length;
    setWpm(Math.round(words / timeElapsed));

    // Check if completed
    if (value === currentSentence) {
      setTimeout(() => {
        if (sentenceIndex + 1 < sentences.length) {
          setSentenceIndex(sentenceIndex + 1);
        } else {
          navigate("/aftergame");
        }
      }, 500);
    }
  };

  const renderColoredSentence = () => {
    return currentSentence.split("").map((char, i) => {
      let className = "text-white";
      if (i < userInput.length) {
        className = userInput[i] === char ? "text-green-400" : "text-red-500";
      }

      return (
        <span key={i} className={`${className} transition-colors duration-150`}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-6 px-4">
      <div className="text-xl max-w-3xl text-center break-words font-mono">
        {renderColoredSentence()}
      </div>

      <input
        className="w-full max-w-xl p-3 text-white rounded bg-gray-700 font-mono"
        value={userInput}
        onChange={handleInputChange}
        ref={inputRef}
        placeholder="Start typing..."
      />

      <div className="flex-colum position-left text-lg font-mono">
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy.toFixed(2)} %</p>
      </div>
    </div>
  );
}

export default GameScreen;
