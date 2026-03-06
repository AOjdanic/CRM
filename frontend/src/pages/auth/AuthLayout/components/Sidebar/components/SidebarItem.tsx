import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';

type Props = {
  to: string;
  icon: ReactNode;
  title: string;
  hideTitle: boolean;
};

export function SidebarItem({ to, icon, title, hideTitle }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        twMerge(
          'flex h-9 p-2 justify-between items-center self-stretch gap-3 rounded-sm text-dark-secondary hover:bg-action-secondary-hover',
          isActive ? 'bg-action-secondary-selected text-dark-primary' : ''
        )
      }
    >
      <div className="flex items-center gap-3 grow shrink-0 basis-0">
        {icon}
        {hideTitle ? null : (
          <span className="text-sm font-medium leading-normal">{title}</span>
        )}
      </div>
    </NavLink>
  );
}
