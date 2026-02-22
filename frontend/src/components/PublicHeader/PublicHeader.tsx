import { Logo } from './components/Logo/Logo';
import { Navigation } from './components/Navigation';
import { LogInOrRegister } from './components/LogInOrRegister';

export function PublicHeader() {
  return (
    <header className="flex justify-between items-center self-stretch py-6 px-20">
      <Logo />

      <Navigation />

      <LogInOrRegister />
    </header>
  );
}
