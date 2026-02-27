import { Hero } from './components/Hero';
import { AppImage } from './components/AppImage';
import { TrustedCompanies } from './components/TrustedCompanies';
import { CrmDesignedForYou } from './components/CrmDesignedForYou';
import { WhyChooseVenture } from './components/WhyChooseVenture';

export function Homepage() {
  return (
    <>
      <Hero />
      <AppImage />
      <TrustedCompanies />
      <CrmDesignedForYou />
      <WhyChooseVenture />
    </>
  );
}
