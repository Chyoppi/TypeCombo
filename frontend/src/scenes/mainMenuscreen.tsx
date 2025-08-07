import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-4">
      <div className="absolute top-4 right-4 space-x-4">
        <Link to="/signin">
          <button className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800">
            Sign in
          </button>
        </Link>
        <Link to="/register">
          <button className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800">
            Register
          </button>
        </Link>
      </div>

      <img
        src="/typecombo_logo.png"
        alt="TypeCombo Logo"
        className="w-32 h-32"
      />
      <h1 className="text-4xl font-bold">TypeCombo</h1>
      <p className="text-2xl">Game where only accuracy and speed matters</p>
      <Link to="/game">
        {" "}
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-800"
        >
          Start Game
        </motion.button>
      </Link>
    </div>
  );
}
export default MainMenu;
