import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import { App } from './App';

const router = createBrowserRouter([{ path: '/', Component: App }]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
