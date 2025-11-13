import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/userContext";

function MainMenu() {
  const {user} = useAuth()
  const isGuest = !user || (user.id === 0) // Set to this because user who is not signed in is automatically Guest user

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
      <Link to="/daily">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl mt-4 px-12 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
          disabled={isGuest}
          aria-disabled={isGuest}
        >
          Daily
        </motion.button>
      </Link>
      <Link to="/normalafter">
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
