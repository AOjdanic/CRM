import { Input } from '../../../../components/Input/Input';
import { Button } from '../../../../components/Button/Button';

import { TitleSection } from '../components/TitleSection';
import { AllRightsReserved } from '../components/AllRightsReserved';

export function NewPassword() {
  return (
    <div className="flex pt-30 pb-20 flex-col items-start gap-10 self-stretch bg-light-secondary flex-1">
      <div className="flex px-35 flex-col justify-center items-center gap-35 self-stretch">
        <div className="flex flex-col justify-center items-center gap-10 self-stretch">
          <TitleSection
            title="Set New Password"
            subtitle="Your new password must be different than the previous passwords"
          />

          <div className="flex flex-col items-start gap-6 w-110">
            <div className="flex flex-col items-center gap-4 w-full">
              <Input label="New Password" placeholder="Enter new password" />
              <Input
                label="Confirm Password"
                placeholder="Confirm new password"
              />
            </div>

            <Button variant="primary" size="large" className="w-full">
              Set New Password
            </Button>
          </div>
        </div>
        <AllRightsReserved />
      </div>
    </div>
  );
}
