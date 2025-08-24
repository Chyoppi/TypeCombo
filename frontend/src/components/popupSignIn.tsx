import { useState } from "react";
import { useAuth } from "../auth/userContext.tsx";
import type { ModalProps } from "../types/accountTypes";
const API_URL = import.meta.env.VITE_API_URL;

export default function SignInModal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // clear previous errors

    try {
      const res = await fetch(`${API_URL}/players/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data);
        onClose();
      } else {
        console.error(data.error);
      }

      onClose();
    } catch (err) {
      setError("Network error, try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/75 z-50">
      <div className="relative bg-gray-800 text-white p-6 rounded-2xl shadow-xl w-full max-w-sm animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Sign In
        </h2>
        {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded p-3 font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
