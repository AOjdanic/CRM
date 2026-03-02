import { useState, type PropsWithChildren } from 'react';
import { AuthContext, type User } from './useAuthContext';

export function AuthenticationProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(() => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  });

  function login(token: string) {
    localStorage.setItem('token', token);
    const payload = JSON.parse(atob(token.split('.')[1]));

    setUser(payload);
  }

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
  }

  const context = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
