import type { ReactNode } from 'react';

type Props = {
  appName: string;
  purpose: string;
  appLogo: ReactNode;
};

export function AppIntegrationBox({ appName, purpose, appLogo }: Props) {
  return (
    <div className="flex py-3 px-6 justify-center items-center gap-4 rounded-lg border border-solid border-border-primary bg-background-primary">
      {appLogo}

      <div className="flex items-center gap-3">
        <span className="text-dark-primary text-lg font-medium leading-normal">
          {appName}
        </span>

        <span className="text-dark-secondary text-center text-sm font-normal leading-normal">
          {purpose}
        </span>
      </div>
    </div>
  );
}
