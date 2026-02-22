import Twitter from './assets/twitterIcon.svg';
import Linkedin from './assets/linkedinIcon.svg';
import Facebook from './assets/facebookIcon.svg';
import Instagram from './assets/instagramIcon.svg';

export function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      <Instagram />
      <Facebook />
      <Linkedin />
      <Twitter />
    </div>
  );
}
