import { Outlet } from 'react-router';
import { PublicHeader } from '../../components/PublicHeader/PublicHeader';
import { Footer } from '../../components/Footer/Footer';

export function PublicLayout() {
  return (
    <>
      <PublicHeader />
      <Outlet />
      <Footer />
    </>
  );
}
