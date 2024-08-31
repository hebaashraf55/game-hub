import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlateforms from '../hooks/usePlateforms'
import { Platform } from '../hooks/useGames'


interface Props {
    onSelectPlatform : (platform: Platform) => void,
    selectedPlatform : Platform | null ; 
}
const PlateFormSelector = ({onSelectPlatform, selectedPlatform} : Props) => {

    const {data , error } = usePlateforms()
    if (error) return null;


  return (
    <Menu > 
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}> {selectedPlatform?.name || 'Platforms'} </MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}> {platform.name} </MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlateFormSelector