import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { uiRoutes } from './uiRoutes';

const Blog = lazy(() => import('./pages/public/Blog/Blog'));
const About = lazy(() => import('./pages/public/About/About'));
const LogIn = lazy(() => import('./pages/public/auth/LogIn/LogIn'));
const Homepage = lazy(() => import('./pages/public/Home/Homepage'));
const Pricing = lazy(() => import('./pages/public/Pricing/Pricing'));
const SignUp = lazy(() => import('./pages/public/auth/SignUp/SignUp'));
const Features = lazy(() => import('./pages/public/Features/Features'));
const PublicLayout = lazy(() => import('./pages/public/Layout/PublicLayout'));
const NewPassword = lazy(
  () => import('./pages/public/auth/NewPassword/NewPassword'),
);
const ResetPassword = lazy(
  () => import('./pages/public/auth/ResetPassword/ResetPassword'),
);

const Notes = lazy(() => import('./pages/auth/Notes/Notes'));
const Tasks = lazy(() => import('./pages/auth/Tasks/Tasks'));
const Emails = lazy(() => import('./pages/auth/Emails/Emails'));
const Contacts = lazy(() => import('./pages/auth/Contacts/Contacts'));
const Settings = lazy(() => import('./pages/auth/Settings/Settings'));
const Calendars = lazy(() => import('./pages/auth/Calendars/Calendars'));
const Dashboard = lazy(() => import('./pages/auth/Dashboard/Dashboard'));
const Companies = lazy(() => import('./pages/auth/Companies/Companies'));
const Analytics = lazy(() => import('./pages/auth/Analytics/Analytics'));
const AuthLayout = lazy(() => import('./pages/auth/AuthLayout/AuthLayout'));
const HelpCenter = lazy(() => import('./pages/auth/HelpCenter/HelpCenter'));
const Integrations = lazy(
  () => import('./pages/auth/Integrations/Integrations'),
);
const Notifications = lazy(
  () => import('./pages/auth/Notifications/Notifications'),
);

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
