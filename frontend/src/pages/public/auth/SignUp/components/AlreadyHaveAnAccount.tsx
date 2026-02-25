import { Link } from 'react-router';

import { uiRoutes } from '../../../../../uiRoutes';

export function AlreadyHaveAnAccount() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-dark-secondary text-sm font-normal">
        Already have an account?
      </span>

      <Link
        className="text-dark-primary text-sm font-semibold"
        to={uiRoutes.public.login}
      >
        Sign In
      </Link>
    </div>
  );
}
