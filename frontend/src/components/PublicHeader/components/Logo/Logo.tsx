import { useNavigate } from 'react-router';
import { LogoImage } from './LogoImage';
import { uiRoutes } from '../../../../uiRoutes';

export function Logo() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-3 hover:cursor-pointer"
      onClick={() => navigate(uiRoutes.public.index)}
    >
      <LogoImage />

      <span className="text-dark-primary text-xl font-medium leading-normal">
        Venture
      </span>
    </div>
  );
}
