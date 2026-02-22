import { Outlet, useLocation } from 'react-router';

import { uiRoutes } from '../../uiRoutes';

import { Footer } from '../../components/Footer/Footer';
import { PublicHeader } from '../../components/PublicHeader/PublicHeader';

export function PublicLayout() {
  const location = useLocation();

  const isOnPasswordsPage =
    location.pathname === uiRoutes.public.resetPassword ||
    location.pathname === uiRoutes.public.newPassword;

  return (
    <>
      <PublicHeader />
      <Outlet />
      {isOnPasswordsPage ? null : <Footer />}
    </>
  );
}
