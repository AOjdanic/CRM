import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { uiRoutes } from '../../../uiRoutes';
import { useAuth } from '../../../hooks/useAuth';
import { SiteSearch } from './components/SiteSearch/SiteSearch';
import { HelpCenter } from './components/HelpCenter/HelpCenter';
import { ProfileDropdown } from './components/ProfileDropdown/ProfileDropdown';
import { Sidebar } from './components/Sidebar/Sidebar';

export function AuthLayout() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate(uiRoutes.public.login);
    }
  });

  return (
    <div className="flex flex-col flex-1">
      <div className="flex h-full">
        <section className="flex flex-1 max-w-62.5">
          <Sidebar />
        </section>

        <section className="flex flex-col w-full flex-1">
          <header className="flex h-18 px-8 justify-between items-center border-b border-solid border-b-border-primary bg-white">
            <div className="w-90">
              <SiteSearch />
            </div>

            <div className="flex items-center gap-8 shrink-0">
              <HelpCenter />
              <ProfileDropdown />
            </div>
          </header>

          <main className="flex flex-col flex-1">
            <Outlet />
          </main>
        </section>
      </div>
    </div>
  );
}
