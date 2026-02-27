import { Hero } from './components/Hero';
import { AppImage } from './components/AppImage';
import { TrustedCompanies } from './components/TrustedCompanies'; 
import { WhyChooseVenture } from './components/WhyChooseVenture';
import { CrmDesignedForYou } from './components/CrmDesignedForYou';
import { ReviewSection } from './components/ReviewSection/ReviewSection';

export function Homepage() {
  return (
    <>
      <Hero />
      <AppImage />
      <TrustedCompanies />
      <CrmDesignedForYou />
      <WhyChooseVenture />
      <ReviewSection />
    </>
  );
}
