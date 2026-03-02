import { AppRouter } from './AppRouter';
import { AuthenticationProvider } from './providers/AuthenticationProvider';

export function App() {
  return (
    <AuthenticationProvider>
      <AppRouter />
    </AuthenticationProvider>
  );
}
