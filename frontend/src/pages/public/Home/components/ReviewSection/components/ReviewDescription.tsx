import type { PropsWithChildren } from 'react';

export function ReviewDescription({ children }: PropsWithChildren) {
  return (
    <span className="flex w-full text-dark-primary line-clamp-2 text-ellipsis text-sm font-normal leading-normal h-15">
      {children}
    </span>
  );
}
