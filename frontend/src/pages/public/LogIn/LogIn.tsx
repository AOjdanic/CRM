import { useState } from 'react';
import { Link } from 'react-router';
import type { Checkbox as CheckboxRadix } from 'radix-ui';

import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import { Logo } from '../../../components/PublicHeader/components/Logo/Logo';

import Eye from './assets/eye.svg';
import loginImage from './assets/loginImage.png';
import GoogleLogo from './assets/googleLogo.svg';

import { uiRoutes } from '../../../uiRoutes';

export function LogIn() {
  const [checked, setChecked] = useState<CheckboxRadix.CheckedState>(false);

  return (
    <main className="flex flex-col h-screen flex-1 w-full">
      <div className="flex items-start h-full bg-light-secondary w-full">
        <img className="inline-block h-screen" src={loginImage} />

        <div className="flex py-16 px-35 flex-col items-center gap-35 shrink-0 self-stretch grow">
          <div className="flex flex-col items-center justify-center gap-9 self-stretch">
            <Logo disableNavigation />

            <div className="flex flex-col justify-center items-center gap-2 self-stretch">
              <h2 className="text-dark-primary text-center text-[32px] font-medium">
                Welcome Back!
              </h2>

              <span className="text-dark-secondary text-base font-normal text-center">
                Please Login to Continue
              </span>
            </div>

            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col gap-4 items-start w-full">
                <Input
                  label="Email Address"
                  placeholder="Enter your email here"
                />

                <Input
                  label="Password"
                  placeholder="Enter your password here"
                  suffixContent={<Eye />}
                />

                <div className="flex justify-between items-center self-stretch">
                  <Checkbox checked={checked} onCheckedChange={setChecked}>
                    <span className="text-dark-tertiary text-sm font-normal select-none cursor-pointer">
                      Remember Me
                    </span>
                  </Checkbox>

                  <Link
                    to={uiRoutes.public.resetPassword}
                    className="text-dark-primary text-sm font-semibold"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <Button className="w-full" variant="primary" size="large">
                  Sign In
                </Button>

                <Button className="w-full" variant="outline" size="large">
                  <div className="flex items-center gap-2">
                    <GoogleLogo /> <span>Sign In With Google</span>
                  </div>
                </Button>

                <div className="flex items-center gap-1">
                  <span className="text-dark-secondary text-sm font-normal">
                    Already have an account?
                  </span>

                  <Link
                    className="text-dark-primary text-sm font-semibold"
                    to={uiRoutes.public.signup}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <span className="text-dark-tertiary text-sm font-normal">
            ©2023 Venture. All rights reserved
          </span>
        </div>
      </div>
    </main>
  );
}
