import { Logo } from '../PublicHeader/components/Logo/Logo';
import { FooterNavigation } from './components/FooterNavigation/FooterNavigation';
import { SocialMedia } from './components/SocialMedia/SocialMedia';
import { SubscribeToNewsletter } from './components/SubscribeToNewsletter';

export function Footer() {
  return (
    <footer className="flex py-16 px-30 flex-col items-start gap-9 bg-light-secondary">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <SocialMedia />
      </div>

      <div className="flex items-start gap-10 self-stretch">
        <FooterNavigation />
        <SubscribeToNewsletter />
      </div>
    </footer>
  );
}
