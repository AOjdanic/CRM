import { SectionTitle } from '../SectionTitle';

import chooseVentureContacts from './assets/chooseVentureContacts.png';
import chooseVentureInsights from './assets/chooseVentureInsights.png';
import chooseVentureDashboard from './assets/chooseVentureDashboard.png';
import chooseVentureAnalytics from './assets/chooseVentureAnalytics.png';

import { ChooseVentureParagraph } from './components/ChooseVentureParagraph';

export function WhyChooseVenture() {
  return (
    <section className="flex py-24 px-20 flex-col justify-center items-end gap-12 self-stretch">
      <SectionTitle
        title="Why Choose Venture as Your CRM Platform"
        subtitle="Here are some reasons why you should choose Venture as your CRM."
      />

      <div className="flex flex-col justify-center items-end gap-6 self-stretch">
        <div className="flex justify-center items-center gap-6 self-stretch">
          <div className="flex h-100 flex-1 pt-6 pl-6 flex-col items-start gap-5 grow shrink-0 basis-0 rounded-lg border border-solid border-border-primary bg-background-secondary overflow-hidden">
            <ChooseVentureParagraph
              className="flex-1"
              title="Effortless Data Management"
              subtitle="Simplify customer data centralization for easy access, updates, and analysis, ensuring a comprehensive clientele overview."
            />

            <div className="flex w-full">
              <img className="w-full" src={chooseVentureAnalytics} />
            </div>
          </div>

          <div className="flex shrink-0 h-100 pl-6 pt-6 items-start gap-5 rounded-lg border border-solid border-border-primary bg-background-secondary overflow-hidden">
            <ChooseVentureParagraph
              className="w-67.5 flex-1"
              title="Scalability for Growth"
              subtitle="Our CRM grows with your business, effortlessly adapting to evolving needs, ensuring effective customer relationship management."
            />

            <div className="flex h-full">
              <img className="w-full" src={chooseVentureDashboard} />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 self-stretch">
          <div className="flex h-100 flex-1 pt-6 pr-6 items-start gap-5 grow shrink-0 basis-0 rounded-lg border border-solid border-border-primary bg-background-secondary overflow-hidden">
            <div className="flex flex-1 h-full">
              <img className="w-full" src={chooseVentureContacts} />
            </div>

            <ChooseVentureParagraph
              className="w-57.5"
              title="Contact Management"
              subtitle="Effortlessly organize and track contacts in one place, efficiently updating and accessing details for top-notch customer service."
            />
          </div>

          <div className="flex flex-col flex-1 h-100 pl-6 pt-6 items-start gap-5 rounded-lg border border-solid border-border-primary bg-background-secondary overflow-hidden">
            <ChooseVentureParagraph
              className="flex-1"
              title="Enhanced Customer Insights"
              subtitle="Deepen customer understanding with our CRM's advanced analytics, exploring preferences and behaviors."
            />

            <div className="flex h-full">
              <img className="w-full" src={chooseVentureInsights} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
