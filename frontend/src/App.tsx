import { IconContext } from '@phosphor-icons/react';
import { AppRouter } from './AppRouter';
import { AuthenticationProvider } from './providers/Auth/AuthenticationProvider';
import { ReactQueryProvider } from './providers/ReactQuery/ReactQueryProvider';

export function App() {
  return (
    <ReactQueryProvider>
      <AuthenticationProvider>
        <IconContext.Provider
          value={{
            size: 20,
            weight: 'regular',
            color: 'currentColor',
          }}
        >
          <AppRouter />
        </IconContext.Provider>
      </AuthenticationProvider>
    </ReactQueryProvider>
  );
}
