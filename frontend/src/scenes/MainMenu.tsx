import { motion } from "framer-motion";

function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-4 space-y-2">
      <h1 className="text-4xl font-bold">Typeracer Game</h1>

      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-800"
      >
        Start Game
      </motion.button>
    </div>
  );
}
export default MainMenu;
