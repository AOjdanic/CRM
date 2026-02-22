import { Button } from '../../Button/Button';

export function SubscribeToNewsletter() {
  return (
    <div className="flex max-w-94 w-full p-6 flex-col items-start gap-4 rounded-sm border border-solid border-border-primary bg-white">
      <span className="text-dark-primary font-medium text-lg">
        Subscribe to Our Newsletter to Get Free Demo for First One Month
      </span>

      <div className="flex py-2.5 px-3 items-center gap-3 self-stretch rounded-sm border border-solid border-interaction-outline-base bg-interaction-secondary-base">
        <span className="text-dark-tertiary text-sm font-normal">
          Enter your email
        </span>
      </div>

      <Button className="w-full" variant="primary" size="large">
        Subscribe
      </Button>
    </div>
  );
}
