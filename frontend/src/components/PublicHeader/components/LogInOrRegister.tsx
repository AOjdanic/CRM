import { useNavigate } from 'react-router';
import { Button } from '../../Button/Button';
import { uiRoutes } from '../../../uiRoutes';

export function LogInOrRegister() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center gap-4">
      <Button
        onClick={() => navigate(uiRoutes.public.login)}
        variant="link"
        size="medium"
      >
        Log In
      </Button>

      <Button
        onClick={() => navigate(uiRoutes.public.signup)}
        variant="primary"
        size="medium"
      >
        Get Started
      </Button>
    </div>
  );
}
