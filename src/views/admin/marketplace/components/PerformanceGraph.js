// Chakra imports
import {Box, Button, Flex, HStack, Icon, Text, useColorModeValue, Center} from '@chakra-ui/react';
import Card from 'components/card/Card.js';
// Custom components
import BarChart from 'components/charts/BarChart';
import React from 'react';
import {barChartDataConsumption, barChartOptionsConsumption} from 'variables/charts';
import {MdBarChart} from 'react-icons/md';

export default function WeeklyRevenue(props) {
  const {...rest} = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const bgHover = useColorModeValue({bg: 'secondaryGray.400'}, {bg: 'whiteAlpha.50'});
  const bgFocus = useColorModeValue({bg: 'secondaryGray.300'}, {bg: 'whiteAlpha.100'});
  return (
    <Box>
      <Card align="center" direction="column" w="100%" {...rest} mt="8%">
        <Flex align="center" w="100%" px="15px" py="10px">
          <Text me="auto" color={textColor} fontSize="xl" fontWeight="700" lineHeight="100%">
            Performance Graph
          </Text>
          <Button
            align="center"
            justifyContent="center"
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
            {...rest}
          >
            <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
          </Button>
        </Flex>

        <Box h="240px" mt="auto">
          <BarChart chartData={barChartDataConsumption} chartOptions={barChartOptionsConsumption} />
        </Box>
        <Text color="lightgrey">
          <i>
            5 – Exceptional; 4 – Exceeds Expectations; 3 – Meets Expectations; 2 – Below Expectations; 1 – Needs
            Improvement
          </i>
        </Text>
      </Card>
      <Box>
        <Center my={5}>
          <p>Categories</p>
        </Center>
        <Center>
          <HStack spacing={10}>
            <Box>
              <p>1 Works to Full Potential</p>
              <p>2 Work Consistency</p>
              <p>3 Communication</p>
              <p>4 Independent Work</p>
              <p>5 Group Work</p>
            </Box>
            <Box>
              <p>6 Creativity</p>
              <p>7 Honesty</p>
              <p>8 Coworker Relations</p>
              <p>9 Technical Skills</p>
              <p>10 Dependability</p>
            </Box>
            <Box>
              <p>11 Productivity</p>
              <p>12 Attendance</p>
              <p>13 Punctuality</p>
              <p>14 Play above the line</p>
              <p>15 Take Initiative</p>
            </Box>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
}
