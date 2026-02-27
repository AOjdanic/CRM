import { SectionTitle } from './SectionTitle';
import { CrmFeatureBox } from './CrmFeatureBox';

import crmDashboard from '../assets/crmDashboard.png';

import Robot from '../assets/robot.svg';
import Clipboard from '../assets/clipboard.svg';
import Presentation from '../assets/presentation.svg';
import Collaborators from '../assets/collaborators.svg';

export function CrmDesignedForYou() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-background-primary py-24 px-20">
      <SectionTitle
        title="A CRM Designed with You in Mind"
        subtitle="Customize everything to make Venture adapt to your business, not the other way around."
      />

      <div className="flex p-6 items-start gap-5 self-stretch rounded-lg border border-solid border-border-primary bg-background-primary">
        <div className="flex flex-col items-start gap-3 max-w-92.5">
          <CrmFeatureBox
            icon={<Clipboard />}
            feature="Manage"
            featureDescription="Effortlessly manage customer data and interactions in a user-friendly platform."
          />

          <CrmFeatureBox
            icon={<Robot stroke="#000" />}
            feature="Automate"
            featureDescription="Boost productivity by automating tasks, ensuring efficient and error-free workflows."
          />

          <CrmFeatureBox
            icon={<Presentation stroke="#000" />}
            feature="Analyze"
            featureDescription="Unleash data power through measuring, and extracting CRM insights for strategy optimization."
          />

          <CrmFeatureBox
            icon={<Collaborators stroke="#000" />}
            feature="Collaborate"
            featureDescription="Enhance teamwork and communication with in-app task assignment and real-time collaboration."
          />
        </div>

        <div className="flex max-w-212.5">
          <img className="w-full" src={crmDashboard} />
        </div>
      </div>
    </section>
  );
}
