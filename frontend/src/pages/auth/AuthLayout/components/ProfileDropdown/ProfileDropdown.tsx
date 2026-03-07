
import mckinney from '../../../../public/Home/components/ReviewSection/assets/mckinney.png';
import { Select } from 'radix-ui';
import { Button } from '../../../../../components/Button/Button';
import { useAuth } from '../../../../../hooks/useAuth';
import { CaretDown } from './components/CaretDown';

export function ProfileDropdown() {
  const { logout } = useAuth();
  return (
    <Select.Root>
      <Select.Trigger className='cursor-pointer'>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-start">
            <img className="flex h-full w-full object-fill" src={mckinney} />
          </div>

          <span className="text-dark-primary text-sm font-medium leading-normal flex">
            Brian F.
          </span>

          <CaretDown />
        </div>
      </Select.Trigger>

      <Select.Content className='mt-5 w-[130px] bg-light-primary rounded-sm' position="popper">
        <div className='flex p-2 justify-center items-center w-full'>
          <Button className='w-full' onClick={logout} variant='outline'>Logout</Button>
        </div>
      </Select.Content>
    </Select.Root>
  );
}
