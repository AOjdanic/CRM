import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';

export function SubscribeToNewsletter() {
  return (
    <div className="flex max-w-94 w-full p-6 flex-col items-start gap-4 rounded-sm border border-solid border-border-primary bg-white">
      <span className="text-dark-primary font-medium text-lg">
        Subscribe to Our Newsletter to Get Free Demo for First One Month
      </span>

      <Input id="subscribe-input" placeholder="Enter your email" />

      <Button className="w-full" variant="primary" size="large">
        Subscribe
      </Button>
    </div>
  );
}
