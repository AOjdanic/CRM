import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { uiRoutes } from '../../uiRoutes';
import { useAuth } from '../../hooks/useAuth';

export function AuthLayout() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('auth effect');
    if (!auth.user) {
      navigate(uiRoutes.public.login);
    }
  });

  return <Outlet />;
}
