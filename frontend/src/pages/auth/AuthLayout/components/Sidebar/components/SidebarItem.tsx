import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

type Props = {
  to: string;
  icon: ReactNode;
  title: string;
};

export function SidebarItem({ to, icon, title }: Props) {
  return (
    <NavLink
      to={to}
      className="flex h-9 p-2 justify-between items-center self-stretch gap-3 rounded-sm text-dark-secondary hover:bg-action-secondary-hover [&.active]:bg-action-secondary-selected [&.active]:text-dark-primary"
    >
      <div className="flex items-center gap-3 grow shrink-0 basis-0">
        {icon}
        <span className="text-sm font-medium leading-normal">{title}</span>
      </div>
    </NavLink>
  );
}
