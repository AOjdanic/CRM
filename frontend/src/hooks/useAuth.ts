import { useContext } from 'react';
import { AuthContext } from '../providers/Auth/useAuthContext';

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Cannot call useAuth outside of the AuthContext');
  }

  return context;
}
