import { NavLink } from 'react-router';
import { uiRoutes } from '../../../uiRoutes';

export function Navigation() {
  return (
    <nav className="flex items-center gap-10 text-dark-primary text-sm font-normal leading-normal">
      <NavLink to={uiRoutes.public.about}>About</NavLink>
      <NavLink to={uiRoutes.public.features}>Features</NavLink>
      <NavLink to={uiRoutes.public.pricing}>Pricing</NavLink>
      <NavLink to={uiRoutes.public.blog}>Blog</NavLink>
    </nav>
  );
}
