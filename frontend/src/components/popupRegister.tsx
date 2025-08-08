import { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (username: string, email: string, password: string) => void;
}

export default function SignInModal({
  isOpen,
  onClose,
  onRegister,
}: RegisterModalProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(username, email, password);
    onClose();
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="username"
            placeholder="Username"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
