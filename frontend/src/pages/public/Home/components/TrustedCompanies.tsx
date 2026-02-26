import ZoomLogo from '../assets/zoomLogo.svg';
import SlackLogo from '../assets/slackLogo.svg';
import GoogleLogo from '../assets/googleLogo.svg';
import SquareLogo from '../assets/squareLogo.svg';
import DropboxLogo from '../assets/dropboxLogo.svg';
import CoinbaseLogo from '../assets/coinbaseLogo.svg';

export function TrustedCompanies() {
  return (
    <div className="flex py-19 flex-col justify-center items-center gap-12 self-stretch bg-background-primary">
      <div className="flex flex-col justify-center items-center gap-4 self-stretch">
        <h2 className="text-dark-primary text-5xl font-medium leading-[120%] text-center">
          Trusted by Many Established Companies
        </h2>

        <span className="text-dark-secondary text-center text-lg font-normal leading-normal">
          20+ Businesses and Companies uses Converge for theirs CRM Platform
        </span>
      </div>

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
    </div>
  );
}
