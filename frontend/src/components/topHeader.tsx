import SignInModal from "./popupSignIn";
import RegisterModal from "./popupRegister";
import { useState } from "react";
import { useAuth } from "../auth/userContext.tsx";

export default function Header() {
  const [RegisterOpen, setRegisterOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="absolute top-4 right-4 space-x-4">
      {user ? (
        <div className="flex items-center gap-4 text-white rounded font-mono">
          <span>{user.username}</span>
          <button
            onClick={logout}
            className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800 font-mono"
            onClick={() => setIsSignInOpen(true)}
          >
            Sign in
          </button>
          <SignInModal
            isOpen={isSignInOpen}
            onClose={() => setIsSignInOpen(false)}
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
          />
        </div>
      )}
    </div>
  );
}
