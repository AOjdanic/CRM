import { useState } from 'react';
import type { Checkbox as CheckboxRadix } from 'radix-ui';

import { Checkbox } from '../../../../../components/Checkbox/Checkbox';

export function RememberMe() {
  const [checked, setChecked] = useState<CheckboxRadix.CheckedState>(false);

  return (
    <Checkbox checked={checked} onCheckedChange={setChecked}>
      <span className="text-dark-tertiary text-sm font-normal select-none cursor-pointer">
        Remember Me
      </span>
    </Checkbox>
  );
}
