import type { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  feature: string;
  featureDescription: string;
};

export function CrmFeatureBox({ icon, feature, featureDescription }: Props) {
  return (
    <div className="flex flex-col p-4 gap-2 self-stretch rounded-sm border border-solid border-border-tertiary bg-background-primary">
      <div className="flex items-center gap-2 self-stretch">
        {icon}
        <span className="text-dark-primary text-xl font-medium leading-[120%]">
          {feature}
        </span>
      </div>
      <span className="text-dark-secondary text-sm leading-normal">
        {featureDescription}
      </span>
    </div>
  );
}
