import type { PropsWithChildren } from 'react';
import { Checkbox as RadixCheckbox } from 'radix-ui';

import CheckedIcon from './assets/checkedState.svg';
import IndeterminateIcon from './assets/indeterminateState.svg';

type Props = PropsWithChildren<RadixCheckbox.CheckboxProps>;

export function Checkbox({ children, checked, disabled, ...props }: Props) {
  return (
    <label className="flex items-center gap-2">
      <RadixCheckbox.Root
        disabled={disabled}
        className="h-5 w-5 rounded-sm border border-solid 
        border-interaction-outline-base bg-interaction-secondary-base 
        cursor-pointer disabled:bg-interaction-secondary-disabled
         hover:not-disabled:border-interaction-outline-hover"
        {...props}
      >
        <RadixCheckbox.Indicator>
          {checked === true ? (
            <CheckedIcon
              className={`h-full w-full ${disabled ? 'opacity-40' : ''}`}
            />
          ) : null}
          {checked === 'indeterminate' ? (
            <IndeterminateIcon
              className={`h-full w-full ${disabled ? 'opacity-40' : ''}`}
            />
          ) : null}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {children}
    </label>
  );
}
