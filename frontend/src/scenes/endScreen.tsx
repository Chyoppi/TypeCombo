import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AfterGame() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-4">
      <h1>Leaderboards, play again buttons. !! Requires backend !!</h1>
      <Link to="/">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl mt-4 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
        >
          Back to menu
        </motion.button>
      </Link>
    </div>
  );
}
export default AfterGame;
