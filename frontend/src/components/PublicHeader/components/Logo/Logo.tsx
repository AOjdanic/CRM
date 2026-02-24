import { useNavigate } from 'react-router';
import { LogoImage } from './LogoImage';
import { uiRoutes } from '../../../../uiRoutes';

type Props = {
  disableNavigation?: boolean;
};

export function Logo({ disableNavigation = false }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-3 hover:cursor-pointer"
      onClick={() => {
        if (!disableNavigation) {
          navigate(uiRoutes.public.index);
        }
      }}
    >
      <LogoImage />

      <span className="text-dark-primary text-xl font-medium leading-normal">
        Venture
      </span>
    </div>
  );
}
