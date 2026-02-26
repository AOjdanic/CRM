import { Button } from '../../../../components/Button/Button';

import Globe from '../assets/Globe.svg';

export function Hero() {
  return (
    <div className="flex flex-col pt-24 pr-20 pb-19 pl-20 items-center gap-9 self-stretch">
      <div className="flex w-265.5 flex-col gap-5">
        <h1 className="text-dark-primary text-center text-[64px] font-medium leading-[120%]">
          Where Efficiency Meets Customer Satisfaction. It's Called{' '}
          <span className="text-light-primary bg-dark-primary">CRM</span>
        </h1>

        <span className="text-dark-secondary text-center text-xl font-medium self-stretch">
          Streamline Operations, Boost Efficiency, and Drive Growth
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 self-stretch">
        <div className="flex justify-center items-start gap-4">
          <Button variant="primary" size="extra-large">
            Get Started
          </Button>

          <Button variant="outline" size="extra-large">
            Learn More
          </Button>
        </div>

        <div className="flex px-3 justify-center items-center gap-2">
          <span className="text-dark-secondary text-sm font-normal">
            Used and helping over more{' '}
            <strong className="text-dark-primary text-sm font-semibold">
              200+ Companies
            </strong>
          </span>

          <Globe />
        </div>
      </div>
    </div>
  );
}
