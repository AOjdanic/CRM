import CaretDown from './assets/caretDown.svg';
import mckinney from '../../../../public/Home/components/ReviewSection/assets/mckinney.png';
import { Select } from 'radix-ui';
import { Button } from '../../../../../components/Button/Button';
import { useAuth } from '../../../../../hooks/useAuth';

export function ProfileDropdown() {
  const { logout } = useAuth();
  return (
    <Select.Root>
      <Select.Trigger>
        <div className="flex items-center gap-8">
          <div className="flex h-8 w-8 p-2 items-start gap-2">
            <img className="flex h-full w-full object-fill" src={mckinney} />
          </div>
          <span className="text-dark-primary text-sm font-medium leading-normal flex">
            Brian F.
          </span>
          <CaretDown />
        </div>
      </Select.Trigger>

      <Select.Content position="popper">
        <Button onClick={logout}>Logout</Button>
      </Select.Content>
    </Select.Root>
  );
}
