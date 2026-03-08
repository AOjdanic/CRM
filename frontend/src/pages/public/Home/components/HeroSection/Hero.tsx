import { useNavigate } from 'react-router';

import { uiRoutes } from '../../../../../uiRoutes';


import { Button } from '../../../../../components/Button/Button';

import { GlobeIcon } from '@phosphor-icons/react';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col pt-24 pr-20 pb-19 pl-20 items-center gap-9 self-stretch">
      <div className="flex w-265.5 flex-col gap-5">
        <h1 className="text-dark-primary text-center text-[64px] font-medium leading-[120%] selection:text-white selection:bg-black">
          Where Efficiency Meets Customer Satisfaction. It's Called{' '}
          <span className="text-light-primary bg-dark-primary selection:text-black! selection:bg-white!">
            CRM
          </span>
        </h1>

        <span className="text-dark-secondary text-center text-xl font-medium self-stretch">
          Streamline Operations, Boost Efficiency, and Drive Growth
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 self-stretch">
        <div className="flex justify-center items-start gap-4">
          <Button
            onClick={() => navigate(uiRoutes.public.signup)}
            variant="primary"
            size="extra-large"
          >
            Get Started
          </Button>

          <Button
            onClick={() => navigate(uiRoutes.public.features)}
            variant="outline"
            size="extra-large"
          >
            Learn More
          </Button>
        </div>

        <div className="flex px-3 justify-center items-center gap-2">
          <span className="text-dark-secondary text-sm font-normal">
            Used by more than{' '}
            <strong className="text-dark-primary text-sm font-semibold">
              200+ Companies
            </strong>
          </span>

          <GlobeIcon />
        </div>
      </div>
    </section>
  );
}
