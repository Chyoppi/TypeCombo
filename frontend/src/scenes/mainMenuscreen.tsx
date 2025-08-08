import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignInModal from "../components/popupSignIn";
import RegisterModal from "../components/popupRegister";

function MainMenu() {
  const [RegisterOpen, setRegisterOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignIn = (email: string, password: string) => {
    console.log("User signed in:", email, password);
    // Here you can call your DB or authentication API
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-4">
      <div className="absolute top-4 right-4 space-x-4">
        <button
          className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
          onClick={() => setIsSignInOpen(true)}
        >
          Sign in
        </button>
        <SignInModal
          isOpen={isSignInOpen}
          onClose={() => setIsSignInOpen(false)}
          onSignIn={handleSignIn}
        />

        <button
          className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
          onClick={() => setRegisterOpen(true)}
        >
          Register
        </button>
        <RegisterModal
          isOpen={RegisterOpen}
          onClose={() => setRegisterOpen(false)}
          onRegister={handleSignIn}
        />
      </div>

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
        {" "}
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
        >
          Start Game
        </motion.button>
      </Link>
    </div>
  );
}
export default MainMenu;
