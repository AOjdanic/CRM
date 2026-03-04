import { Input } from '../../../../../components/Input/Input';
import MagnifyingGlass from './assets/magnifyingGlass.svg';
import { CommandF } from './components/CommandF';

export function SiteSearch() {
  return (
    <Input
      placeholder="Search"
      prefixContent={<MagnifyingGlass />}
      suffixContent={<CommandF />}
    />
  );
}
