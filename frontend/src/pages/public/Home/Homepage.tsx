import { Hero } from './components/HeroSection/Hero';
import { ReviewSection } from './components/ReviewSection/ReviewSection';
import { CrmImageSection } from './components/CrmImageSection/CrmImageSection';
import { TrustedCompanies } from './components/TrustedCompanies/TrustedCompanies';
import { WhyChooseVenture } from './components/WhyChooseVenture/WhyChooseVenture';
import { AppIntegrations } from './components/IntegrationsSection/AppIntegrations';
import { CrmDesignedForYou } from './components/DesignedForYouSection/CrmDesignedForYou';
import { NextLevelSection } from './components/NextLevelSection/NextLevelSection';

export default function Homepage() {
  return (
    <>
      <Hero />
      <CrmImageSection />
      <TrustedCompanies />
      <CrmDesignedForYou />
      <WhyChooseVenture />
      <AppIntegrations />
      <ReviewSection />
      <NextLevelSection />
    </>
  );
}
