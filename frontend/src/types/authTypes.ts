// User
export interface User {
  id: number;
  username: string;
  email: string;
}

// Auth context
export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
