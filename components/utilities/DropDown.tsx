/* import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@/chakra-ui/react';
import { IoPencilOutline as EditIcon } from 'react-icons/io';

type PropsType = {
  icon: React.ReactNode,
};

const DropDown = ({ icon: Icon  }: PropsType) => {
  return (
  <Menu isLazy>
    <MenuButton className='mr-3'>
    <Icon className='text-darkSelect hover:text-darkTxt transistion-all duration-200 ease-in-out' size={25} />
    </MenuButton>
    <MenuList className='bg-darkSelect'>
        <MenuItem>Edit</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default DropDown; */
