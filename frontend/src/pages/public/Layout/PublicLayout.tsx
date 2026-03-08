import { Outlet, useLocation } from 'react-router';

import { uiRoutes } from '../../../uiRoutes';

import { Footer } from './components/Footer/Footer';
import { PublicHeader } from './components/PublicHeader/PublicHeader';

export default function PublicLayout() {
  const location = useLocation();

  const isOnPasswordPages =
    location.pathname === uiRoutes.public.resetPassword ||
    location.pathname === uiRoutes.public.newPassword;

  return (
    <>
      <PublicHeader />
      <main className="flex flex-col w-full flex-1 max-w-360 mx-auto">
        <Outlet />
      </main>
      {isOnPasswordPages ? null : <Footer />}
    </>
  );
}
