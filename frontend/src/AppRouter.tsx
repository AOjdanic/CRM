import { createBrowserRouter, RouterProvider } from 'react-router';

import { uiRoutes } from './uiRoutes';

import { Blog } from './pages/public/Blog/Blog';
import { About } from './pages/public/About/About';
import { LogIn } from './pages/public/auth/LogIn/LogIn';
import { Homepage } from './pages/public/Home/Homepage';
import { Pricing } from './pages/public/Pricing/Pricing';
import { SignUp } from './pages/public/auth/SignUp/SignUp';
import { PublicLayout } from './pages/public/PublicLayout';
import { Features } from './pages/public/Features/Features';
import { NewPassword } from './pages/public/auth/NewPassword/NewPassword';
import { ResetPassword } from './pages/public/auth/ResetPassword/ResetPassword';

import { Dashboard } from './pages/auth/Dashboard/Dashboard';
import { AuthLayout } from './pages/auth/AuthLayout/AuthLayout';

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
    path: uiRoutes.auth.dashboard,
    Component: AuthLayout,
    children: [{ index: true, Component: Dashboard }],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
