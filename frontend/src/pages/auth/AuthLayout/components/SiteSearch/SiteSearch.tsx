import { MagnifyingGlassIcon } from '@phosphor-icons/react';

import { CommandF } from './components/CommandF';

import { Input } from '../../../../../components/Input/Input';

export function SiteSearch() {
  return (
    <Input
      placeholder="Search"
      prefixContent={<MagnifyingGlassIcon size={20} weight="bold" />}
      suffixContent={<CommandF />}
    />
  );
}
