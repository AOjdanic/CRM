import { Link } from 'react-router';

import { uiRoutes } from '../../../../uiRoutes';

import { Input } from '../../../../components/Input/Input';
import { Button } from '../../../../components/Button/Button';

import { TitleSection } from '../components/TitleSection';
import { AllRightsReserved } from '../components/AllRightsReserved';

export function ResetPassword() {
  return (
    <div className="flex pt-30 pb-20 flex-col items-start gap-10 self-stretch bg-light-secondary flex-1">
      <div className="flex px-35 flex-col justify-center items-center gap-35 self-stretch">
        <div className="flex flex-col justify-center items-center gap-10 self-stretch">
          <TitleSection
            title="Reset Password"
            subtitle="Enter your registered login email address to receive a secured link to set a new password"
          />

          <div className="flex flex-col items-start gap-6 w-110">
            <Input label="Email Address" placeholder="Enter your email" />

            <div className="flex flex-col items-center gap-4 w-full">
              <Button variant="primary" size="large" className="w-full">
                Send Reset Link To Email
              </Button>

              <div className="flex items-center gap-1">
                <span className="text-sm font-normal text-dark-secondary">
                  Don't want to reset your Password?
                </span>

                <Link
                  className="text-dark-primary text-sm font-semibold"
                  to={uiRoutes.public.login}
                >
                  Back To Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AllRightsReserved />
      </div>
    </div>
  );
}
