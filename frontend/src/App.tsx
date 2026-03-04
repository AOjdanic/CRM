import { AppRouter } from './AppRouter';
import { AuthenticationProvider } from './providers/AuthenticationProvider';
import { ReactQueryProvider } from './providers/ReactQuery/ReactQueryProvider';

export function App() {
  return (
    <ReactQueryProvider>
      <AuthenticationProvider>
        <AppRouter />
      </AuthenticationProvider>
    </ReactQueryProvider>
  );
}
