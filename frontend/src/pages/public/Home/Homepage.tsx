import { AppImage } from './components/AppImage';
import { Hero } from './components/Hero';

import { TrustedCompanies } from './components/TrustedCompanies';

export function Homepage() {
  return (
    <>
      <Hero />
      <AppImage />
      <TrustedCompanies />
    </>
  );
}
