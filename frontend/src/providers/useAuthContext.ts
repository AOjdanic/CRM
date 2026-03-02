import { createContext } from 'react';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthContext = {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContext | null>(null);
