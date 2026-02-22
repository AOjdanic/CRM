import { createBrowserRouter, RouterProvider } from 'react-router';

import { uiRoutes } from './uiRoutes';

import { Blog } from './pages/public/Blog/Blog';
import { LogIn } from './pages/public/LogIn/LogIn';
import { About } from './pages/public/About/About';
import { SignUp } from './pages/public/SignUp/SignUp';
import { Pricing } from './pages/public/Pricing/Pricing';
import { PublicLayout } from './pages/public/PublicLayout';
import { Features } from './pages/public/Features/Features';
import { Homepage } from './pages/public/Homepage/Homepage';
import { NewPassword } from './pages/public/NewPassword/NewPassword';
import { ResetPassword } from './pages/public/ResetPassword/ResetPassword';

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
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
