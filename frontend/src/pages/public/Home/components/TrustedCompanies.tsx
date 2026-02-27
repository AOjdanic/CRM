import ZoomLogo from '../assets/zoomLogo.svg';
import SlackLogo from '../assets/slackLogo.svg';
import GoogleLogo from '../assets/googleLogo.svg';
import SquareLogo from '../assets/squareLogo.svg';
import DropboxLogo from '../assets/dropboxLogo.svg';
import CoinbaseLogo from '../assets/coinbaseLogo.svg';
import { SectionTitle } from './SectionTitle';

export function TrustedCompanies() {
  return (
    <section className="flex py-19 flex-col justify-center items-center gap-12 self-stretch bg-background-primary">
      <SectionTitle
        title="Trusted by Many Established Companies"
        subtitle="20+ Businesses and Companies uses Venture for their CRM Platform"
      />

      <div className="flex py-16 px-20 flex-col items-center gap-9 self-stretch bg-background-secondary">
        <div className="flex justify-between items-start self-stretch">
          <CoinbaseLogo />
          <DropboxLogo />
          <GoogleLogo />
          <SlackLogo />
          <SquareLogo />
          <ZoomLogo />
        </div>
      </div>
    </section>
  );
}
