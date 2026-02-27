import { Button } from '../../../../../components/Button/Button';
import { SectionTitle } from '../SectionTitle';
import { AppIntegrationBox } from './components/AppIntegrationBox';

import Loom from './assets/loom.svg';
import Gmail from './assets/gmail.svg';
import Slack from './assets/slack.svg';
import Drive from './assets/drive.svg';
import Dropbox from './assets/dropbox.svg';
import Evernote from './assets/evernote.svg';
import Mailchimp from './assets/mailchimp.svg';
import Mastercard from './assets/mastercard.svg';

export function AppIntegrations() {
  return (
    <section className="flex py-19 px-20 flex-col justify-center items-center gap-12 bg-background-secondary">
      <SectionTitle
        title="Integrated with 60+ Apps"
        subtitle="Venture providing 60+ integrated tools to make your works even easier."
      />

      <div className="flex justify-center items-center content-center gap-5 flex-wrap">
        <AppIntegrationBox
          appLogo={<Evernote />}
          appName="Evernote"
          purpose="Notes"
        />
        <AppIntegrationBox
          appLogo={<Gmail />}
          appName="Gmail"
          purpose="Mailing"
        />
        <AppIntegrationBox
          appLogo={<Loom />}
          appName="Loom"
          purpose="Communication"
        />
        <AppIntegrationBox
          appLogo={<Drive />}
          appName="Drive"
          purpose="File Manager"
        />
        <AppIntegrationBox
          appLogo={<Mastercard />}
          appName="Mastercard"
          purpose="Payment"
        />
        <AppIntegrationBox
          appLogo={<Slack />}
          appName="Slack"
          purpose="Communication"
        />
        <AppIntegrationBox
          appLogo={<Dropbox />}
          appName="Dropbox"
          purpose="File Manager"
        />
        <AppIntegrationBox
          appLogo={<Mailchimp />}
          appName="Mailchimp"
          purpose="Mailing"
        />
      </div>

      <Button variant="outline" size="extra-large">
        View All App Integrations
      </Button>
    </section>
  );
}
