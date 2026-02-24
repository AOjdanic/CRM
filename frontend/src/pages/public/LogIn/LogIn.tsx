import { useState } from 'react';

import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';

import { Logo } from '../../../components/PublicHeader/components/Logo/Logo';

import Eye from './assets/eye.svg';
import ClosedEye from './assets/closedEye.svg';
import loginImage from './assets/loginImage.png';
import GoogleLogo from './assets/googleLogo.svg';

import { RememberMe } from './components/RememberMe';
import { TitleSection } from './components/TitleSection';
import { ForgotPassword } from './components/ForgotPassword';
import { AllRightsReserved } from './components/AllRightsReserved';
import { AlreadyHaveAnAccount } from './components/AlreadyHaveAnAccount';

export function LogIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <main className="flex flex-col h-screen flex-1 w-full">
      <div className="flex items-start h-full bg-light-secondary w-full">
        <img className="flex h-full flex-1" src={loginImage} />

        <div className="flex py-16 px-35 flex-col items-center gap-35 flex-1">
          <div className="flex flex-col items-center justify-center gap-9 self-stretch">
            <Logo disableNavigation />

            <TitleSection />

            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col gap-4 items-start w-full">
                <Input
                  label="Email Address"
                  placeholder="Enter your email here"
                />

                <Input
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  placeholder="Enter your password here"
                  suffixContent={
                    showPassword ? (
                      <ClosedEye
                        className="h-5 w-5 cursor-pointer"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <Eye
                        className="h-5 w-5 cursor-pointer"
                        onClick={() => setShowPassword(true)}
                      />
                    )
                  }
                />

                <div className="flex justify-between items-center self-stretch">
                  <RememberMe />

                  <ForgotPassword />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <Button className="w-full" variant="primary" size="large">
                  Log In
                </Button>

                <Button className="w-full" variant="outline" size="large">
                  <div className="flex items-center gap-2">
                    <GoogleLogo /> <span>Log In With Google</span>
                  </div>
                </Button>

                <AlreadyHaveAnAccount />
              </div>
            </div>
          </div>
          <AllRightsReserved />
        </div>
      </div>
    </main>
  );
}
