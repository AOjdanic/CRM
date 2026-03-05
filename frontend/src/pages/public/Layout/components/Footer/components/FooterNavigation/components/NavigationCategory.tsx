import type { PropsWithChildren } from 'react';

export function NavigationCategory({ children }: PropsWithChildren) {
  return (
    <span className="text-dark-primary text-lg font-medium">{children}</span>
  );
}
