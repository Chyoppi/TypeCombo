interface ColoredSentenceProps {
  currentSentence: string;
  userInput: string;
}

export const ColoredSentence = ({
  currentSentence,
  userInput,
}: ColoredSentenceProps) => {
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
