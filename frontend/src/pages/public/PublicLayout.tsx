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
      <div className="flex flex-col w-full flex-1">
        <Outlet />
      </div>
      {isOnPasswordsPage ? null : <Footer />}
    </>
  );
}
