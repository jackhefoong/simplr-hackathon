// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      {/* <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
      "I'm a professional Netflix marathoner, expert pizza eater, and occasional adult. I'm not saying I'm Batman, but have you ever seen me and Batman in the same room? Me neither. Let's be friends so I can borrow your dog and pretend it's mine on Instagram."
      </Text> */}
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Education'
          value='Forward School'
        />
        <Information
          boxShadow={cardShadow}
          title='Languages'
          value='English, Chinese, Malay'
        />
        <Information
          boxShadow={cardShadow}
          title='Department'
          value='Engineering'
        />
        <Information
          boxShadow={cardShadow}
          title='Work History'
          value='Google, Meta, Forward School'
        />
        <Information
          boxShadow={cardShadow}
          title='Organization'
          value='SIMPLR LOGIC'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='20 July 1986'
        />
      </SimpleGrid>
    </Card>
  );
}
