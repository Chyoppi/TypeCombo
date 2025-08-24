import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-4">
      <img
        src="/typecombo_logo.png"
        alt="TypeCombo Logo"
        className="w-32 h-32"
      />
      <h1 className="text-4xl font-bold font-mono">TypeCombo</h1>
      <p className="text-2xl font-mono">
        Game where only accuracy and speed matters
      </p>
      <Link to="/game">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl mt-4 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
        >
          Start Game
        </motion.button>
      </Link>
      <Link to="/">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl mt-4 px-12 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
        >
          Daily
        </motion.button>
      </Link>
      <Link to="/aftergame">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl mt-4 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
        >
          Leaderboard
        </motion.button>
      </Link>
    </div>
  );
}
export default MainMenu;
