import { Button } from '../../../../../components/Button/Button';

import nextLevelDashboard from './assets/nextLevelDashboard.png';

export function NextLevelSection() {
  return (
    <section className="flex py-24 px-20 flex-col justify-center items-center gap-12">
      <div className="flex pl-14 pt-12 gap-6 bg-dark-primary rounded-lg overflow-hidden">
        <div className="flex flex-col gap-10 max-w-142 w-full">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-light-primary text-5xl font-medium leading-[120%]">
              Take Your Business to the Next Level
            </h3>

            <span className="text-light-primary text-lg font-normal leading-normal">
              Dive into the advantages of our CRM platform and witness the
              impact on your business.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <Button size="extra-large" variant={'ghost'}>
              Get Started
            </Button>

            <Button
              className="text-light-primary"
              size="extra-large"
              variant={'link'}
            >
              Request a Demo
            </Button>
          </div>
        </div>

        <div className="flex w-full">
          <img className="w-full" src={nextLevelDashboard} />
        </div>
      </div>
    </section>
  );
}
