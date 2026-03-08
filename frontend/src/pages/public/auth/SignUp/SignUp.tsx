import { useState } from 'react';
import { Checkbox as RadixCheckbox } from 'radix-ui';

import { Input } from '../../../../components/Input/Input';
import { Button } from '../../../../components/Button/Button';

import { Logo } from '../../Layout/components/PublicHeader/components/Logo/Logo';

import Eye from '../assets/eye.svg';
import ClosedEye from '../assets/closedEye.svg';
import signupImage from '../assets/signupImage.png';
import GoogleLogo from '../assets/googleLogo.svg';

import { TitleSection } from '../components/TitleSection';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';
import { AllRightsReserved } from '../components/AllRightsReserved';
import { AlreadyHaveAnAccount } from './components/AlreadyHaveAnAccount';
import { useSignUp } from './hooks/useSignUp';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const [checked, setChecked] = useState<RadixCheckbox.CheckedState>(false);

  const { mutate: signup } = useSignUp();
  const payload = { firstName, lastName, email, password };

  return (
    <main className="flex flex-col h-screen flex-1 w-full">
      <div className="flex items-start h-full bg-light-secondary w-full">
        <img className="flex h-full flex-1" src={signupImage} />

        <div className="flex py-16 px-35 flex-col items-center gap-35 flex-1">
          <div className="flex flex-col items-center justify-center gap-9 self-stretch">
            <Logo />

            <TitleSection
              title="Create Your Account"
              subtitle="Please Create an Account to Continue"
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                signup(payload);
              }}
              className="flex flex-col items-start gap-6 w-full"
            >
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-start gap-4 self-stretch">
                  <Input
                    value={firstName}
                    onInput={(e) => {
                      const value = (e.target as HTMLInputElement).value;
                      setFirstName(value);
                    }}
                    label="First Name"
                    placeholder="First Name"
                  />

                  <Input
                    value={lastName}
                    onInput={(e) => {
                      const value = (e.target as HTMLInputElement).value;
                      setLastName(value);
                    }}
                    label="Last Name"
                    placeholder="Last Name"
                  />
                </div>

                <Input
                  value={email}
                  label="Email Address"
                  placeholder="Enter your email here"
                  onInput={(e) => {
                    const value = (e.target as HTMLInputElement).value;
                    setEmail(value);
                  }}
                />

                <div className="flex items-start gap-4 self-stretch">
                  <Input
                    value={password}
                    onInput={(e) => {
                      const value = (e.target as HTMLInputElement).value;
                      setPassword(value);
                    }}
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    placeholder="Password"
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

                  <Input
                    type={showConfirm ? 'text' : 'password'}
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    suffixContent={
                      showConfirm ? (
                        <ClosedEye
                          className="h-5 w-5 cursor-pointer"
                          onClick={() => setShowConfirm(false)}
                        />
                      ) : (
                        <Eye
                          className="h-5 w-5 cursor-pointer"
                          onClick={() => setShowConfirm(true)}
                        />
                      )
                    }
                  />
                </div>

                <div className="flex justify-between items-center self-stretch">
                  <Checkbox checked={checked} onCheckedChange={setChecked}>
                    <span className="text-dark-tertiary text-sm font-normal select-none cursor-pointer">
                      I accept the{' '}
                      <strong className="text-dark-primary">
                        Terms of Service
                      </strong>{' '}
                      and{' '}
                      <strong className="text-dark-primary">
                        Privacy Policy
                      </strong>
                    </span>
                  </Checkbox>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <Button
                  onClick={() => signup(payload)}
                  className="w-full"
                  variant="primary"
                  size="large"
                >
                  Sign Up
                </Button>

                <Button className="w-full" variant="outline" size="large">
                  <div className="flex items-center gap-2">
                    <GoogleLogo />
                    <span>Sign Up With Google</span>
                  </div>
                </Button>

                <AlreadyHaveAnAccount />
              </div>
            </form>
          </div>
          <AllRightsReserved />
        </div>
      </div>
    </main>
  );
}
