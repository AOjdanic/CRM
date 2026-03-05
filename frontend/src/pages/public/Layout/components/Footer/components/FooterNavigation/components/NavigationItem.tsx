import type { PropsWithChildren } from 'react';
import { Link } from 'react-router';

type Props = PropsWithChildren<{ to: string }>;

export function NavigationItem({ to = '', children }: Props) {
  return (
    <Link to={to} className="text-dark-tertiary text-base font-normal">
      {children}
    </Link>
  );
}
