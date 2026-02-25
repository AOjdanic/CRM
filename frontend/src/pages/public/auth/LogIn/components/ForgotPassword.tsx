import { Link } from 'react-router';

import { uiRoutes } from '../../../../../uiRoutes';

export function ForgotPassword() {
  return (
    <Link
      to={uiRoutes.public.resetPassword}
      className="text-dark-primary text-sm font-semibold"
    >
      Forgot Password?
    </Link>
  );
}
