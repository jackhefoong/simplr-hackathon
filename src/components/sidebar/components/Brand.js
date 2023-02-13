import React from 'react';
import {Box, Image} from '@chakra-ui/react';
// Chakra imports
import {Flex, useColorModeValue} from '@chakra-ui/react';

// Custom components
import {HorizonLogo} from 'components/icons/Icons';
import {HSeparator} from 'components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex align="center" direction="column">
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      {/* <Box boxSize="sm"> */}
      <Image src="https://my.joblum.com/uploads/43/42448.jpg" alt="Logo" w="170px"/>
      {/* </Box> */}
      <HSeparator mb="20px" mt="20px" />
    </Flex>
  );
}

export default SidebarBrand;
