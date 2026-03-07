import { createBrowserRouter, RouterProvider } from 'react-router';

import { uiRoutes } from './uiRoutes';

import { Blog } from './pages/public/Blog/Blog';
import { About } from './pages/public/About/About';
import { LogIn } from './pages/public/auth/LogIn/LogIn';
import { Homepage } from './pages/public/Home/Homepage';
import { Pricing } from './pages/public/Pricing/Pricing';
import { SignUp } from './pages/public/auth/SignUp/SignUp';
import { Features } from './pages/public/Features/Features';
import { PublicLayout } from './pages/public/Layout/PublicLayout';
import { NewPassword } from './pages/public/auth/NewPassword/NewPassword';
import { ResetPassword } from './pages/public/auth/ResetPassword/ResetPassword';

import { Notes } from './pages/auth/Notes/Notes';
import { Tasks } from './pages/auth/Tasks/Tasks';
import { Emails } from './pages/auth/Emails/Emails';
import { Contacts } from './pages/auth/Contacts/Contacts';
import { Settings } from './pages/auth/Settings/Settings';
import { Calendars } from './pages/auth/Calendars/Calendars';
import { Dashboard } from './pages/auth/Dashboard/Dashboard';
import { Companies } from './pages/auth/Companies/Companies';
import { Analytics } from './pages/auth/Analytics/Analytics';
import { AuthLayout } from './pages/auth/AuthLayout/AuthLayout';
import { HelpCenter } from './pages/auth/HelpCenter/HelpCenter';
import { Integrations } from './pages/auth/Integrations/Integrations';
import { Notifications } from './pages/auth/Notifications/Notifications';

const router = createBrowserRouter([
  {
    path: uiRoutes.public.index,
    Component: PublicLayout,
    children: [
      { index: true, Component: Homepage },
      { path: uiRoutes.public.blog, Component: Blog },
      { path: uiRoutes.public.about, Component: About },
      { path: uiRoutes.public.pricing, Component: Pricing },
      { path: uiRoutes.public.features, Component: Features },
      { path: uiRoutes.public.newPassword, Component: NewPassword },
      { path: uiRoutes.public.resetPassword, Component: ResetPassword },
    ],
  },
  { path: uiRoutes.public.login, Component: LogIn },
  { path: uiRoutes.public.signup, Component: SignUp },

  {
    path: uiRoutes.auth.index,
    Component: AuthLayout,
    children: [
      { path: uiRoutes.auth.dashboard, Component: Dashboard },
      { path: uiRoutes.auth.notes, Component: Notes },
      { path: uiRoutes.auth.notifications, Component: Notifications },
      { path: uiRoutes.auth.tasks, Component: Tasks },
      { path: uiRoutes.auth.emails, Component: Emails },
      { path: uiRoutes.auth.calendars, Component: Calendars },
      { path: uiRoutes.auth.analytics, Component: Analytics },
      { path: uiRoutes.auth.contacts, Component: Contacts },
      { path: uiRoutes.auth.companies, Component: Companies },
      { path: uiRoutes.auth.integrations, Component: Integrations },
      { path: uiRoutes.auth.settings, Component: Settings },
      { path: uiRoutes.auth.helpCenter, Component: HelpCenter },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
