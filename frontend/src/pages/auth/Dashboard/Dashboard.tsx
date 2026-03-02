import { useAuth } from '../../../hooks/useAuth';

export function Dashboard() {
  const auth = useAuth();

  return (
    <main>
      Dashboard
      <button onClick={() => auth.logout()}>logout</button>
    </main>
  );
}
