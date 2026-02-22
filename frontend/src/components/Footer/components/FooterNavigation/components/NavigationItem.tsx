import type { PropsWithChildren } from 'react';

export function NavigationItem({ children }: PropsWithChildren) {
  return (
    <span className="text-dark-tertiary text-base font-normal">{children}</span>
  );
}
