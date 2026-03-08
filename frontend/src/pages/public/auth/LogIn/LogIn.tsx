import { useState } from 'react';

import { useLogin } from './hooks/useLogIn';

import { Input } from '../../../../components/Input/Input';
import { Button } from '../../../../components/Button/Button';

import Eye from '../assets/eye.svg';
import ClosedEye from '../assets/closedEye.svg';
import loginImage from '../assets/loginImage.png';
import GoogleLogo from '../assets/googleLogo.svg';

import { RememberMe } from './components/RememberMe';
import { TitleSection } from '../components/TitleSection';
import { ForgotPassword } from './components/ForgotPassword';
import { AllRightsReserved } from '../components/AllRightsReserved';
import { AlreadyHaveAnAccount } from './components/AlreadyHaveAnAccount';
import { Logo } from '../../Layout/components/PublicHeader/components/Logo/Logo';

export default function LogIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const { mutate: login } = useLogin();

  return (
    <main className="flex flex-col h-screen flex-1 w-full">
      <div className="flex items-start h-full bg-light-secondary w-full">
        <img className="flex h-full flex-1" src={loginImage} />

        <div className="flex py-16 px-35 flex-col items-center gap-35 flex-1">
          <div className="flex flex-col items-center justify-center gap-9 self-stretch">
            <Logo />

            <TitleSection
              title="Welcome Back!"
              subtitle="Please Log In to Continue"
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                login({ email, password });
              }}
              className="flex flex-col items-start gap-6 w-full"
            >
              <div className="flex flex-col gap-4 items-start w-full">
                <Input
                  value={email}
                  label="Email Address"
                  placeholder="Enter your email here"
                  onInput={(e) => {
                    const value = (e.target as HTMLInputElement).value;
                    setEmail(value);
                  }}
                />

                <Input
                  value={password}
                  onInput={(e) => {
                    const value = (e.target as HTMLInputElement).value;
                    setPassword(value);
                  }}
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
                <Button
                  onClick={() => login({ email, password })}
                  className="w-full"
                  variant="primary"
                  size="large"
                >
                  Log In
                </Button>

                <Button className="w-full" variant="outline" size="large">
                  <div className="flex items-center gap-2">
                    <GoogleLogo /> <span>Log In With Google</span>
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
