import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: Props) => {
  const IconMap : {[ key: string] : IconType } = { 
    pc: FaWindows ,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo : SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
