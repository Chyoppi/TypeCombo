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
  const [countdown, setCountdown] = useState(3);
  const [isGameActive, setIsGameActive] = useState(false);

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

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsGameActive(true);
      setCurrentSentence(sentences[sentenceIndex]);
      inputRef.current?.focus();
    }
  }, [countdown, sentenceIndex, sentences]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isGameActive) {
      return;
    }

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

  const getPlaceholderText = () => {
    if (countdown > 0) {
      return `Get ready... ${countdown}`;
    }
    return "Start typing...";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-6 px-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="text-2xl sm:text-3xl lg:text-4xl max-w-full leading-relaxed font-mono select-none break-words tracking-wide">
            {renderColoredSentence()}
          </div>
        </div>

        {/* Input field */}
        <input
          className="w-full max-w-4xl p-4 text-white text-lg rounded-xl bg-gray-700 font-mono tracking-wide placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600"
          value={userInput}
          onChange={handleInputChange}
          onPaste={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
          ref={inputRef}
          placeholder={getPlaceholderText()}
        />

        {/* Stats */}
        <div className="flex justify-around items-center mt-8 text-xl sm:text-2xl font-mono">
          <div className="flex items-center gap-2">
            <span className="text-red-600">WPM:</span>
            <span className="text-white font-bold">{wpm}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-600">Accuracy:</span>
            <span className="text-white font-bold">
              {accuracy.toFixed(2)} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
