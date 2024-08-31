import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlateforms from '../hooks/usePlateforms'

const PlateFormSelector = () => {
    const {data , error } = usePlateforms()
    if (error) return null;


  return (
    <Menu > 
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}> Plateforms </MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem key={platform.id}> {platform.name} </MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlateFormSelector