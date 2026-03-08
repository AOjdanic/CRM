import { CommandIcon } from '@phosphor-icons/react';

export function CommandF() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex w-5 h-5 justify-center items-center gap-2.5 rounded-xs bg-background-tertiary">
        <CommandIcon size={16} weight="bold" />
      </div>

      <div className="flex w-5 h-5 justify-center items-center gap-2.5 rounded-xs bg-background-tertiary">
        <span className="text-dark-secondary text-base font-medium leading-normal">
          F
        </span>
      </div>
    </div>
  );
}
