import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Input,
  Button,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useConst,
  NumberInput,
  NumberInputField,
  Divider,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import {Avatar, Box, Flex, FormLabel, Icon, Select, SimpleGrid, useColorModeValue, Grid} from '@chakra-ui/react';
import React from 'react';
import {MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy} from 'react-icons/md';
import CheckTable from 'views/admin/default/components/CheckTable';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import PieCard from 'views/admin/default/components/PieCard';
import Tasks from 'views/admin/default/components/Tasks';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import {columnsDataCheck, columnsDataComplex} from 'views/admin/default/variables/columnsData';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json';

// Custom components
import Banner from 'views/admin/profile/components/Banner';
import General from 'views/admin/profile/components/General';
import Notifications from 'views/admin/profile/components/Notifications';
import Projects from 'views/admin/profile/components/Projects';
import Storage from 'views/admin/profile/components/Storage';
import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';

const user = JSON.parse(window.localStorage.getItem('user'));
const isAdmin = user.isAdmin;

export default function UserReports() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useConst("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <>
      <>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Personal Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Th>
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input
                            type="email"
                            value={input}
                            onChange={handleInputChange}
                          />
                        </FormControl>
                      </Th>
                      <Th>
                        <FormControl>
                          <FormLabel>Gender</FormLabel>
                          <Select placeholder="Select gender">
                            <option>Male</option>
                            <option>Female</option>
                          </Select>
                        </FormControl>
                      </Th>
                    </Tr>
                    <Tr>
                      <Th>
                        <FormControl>
                          <FormLabel>Contact No.</FormLabel>
                          <NumberInput>
                            <NumberInputField />
                          </NumberInput>
                        </FormControl>
                      </Th>
                      <Th>
                        <FormControl>
                          <FormLabel>I/C</FormLabel>
                          <NumberInput>
                            <NumberInputField />
                          </NumberInput>
                        </FormControl>
                      </Th>
                    </Tr>
                    <Tr>
                      <Th>
                        <FormControl>
                          <FormLabel>Personal Email</FormLabel>
                          <Input type="email" />
                        </FormControl>
                      </Th>
                      <Th>
                        <FormControl>
                          <FormLabel>Address</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Th>
                    </Tr>
                    <Tr>
                      <Th>
                        <FormControl>
                          <FormLabel>Contact No. (Emergency Contact)</FormLabel>
                          <NumberInput>
                            <NumberInputField />
                          </NumberInput>
                        </FormControl>
                      </Th>
                      <Th>
                        <FormControl>
                          <FormLabel>Contact Name (Emergency Contact)</FormLabel>
                          <Input
                            type="email"
                            value={input}
                            onChange={handleInputChange}
                          />
                        </FormControl>
                      </Th>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <Box>
        <SimpleGrid columns={2} gap="20px" mb="20px">
          <TotalSpent />
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </SimpleGrid>
        {/* <SimpleGrid columns={{ base: 2, md: 2, xl: 2 }} gap='20px' mb='20px'>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'> */}
        {/* <DailyTraffic /> */}
        {/* <PieCard /> */}
        {/* </SimpleGrid>
    </SimpleGrid>
    <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'> */}
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
        <Tasks />
        <MiniCalendar h='100%' minW='100%' selectRange={false} />
      </SimpleGrid> */}
        {/* </SimpleGrid> */}
      </Box>
    </>
  );
  if (isAdmin === 'True') {
    return (
      <Box>
        <SimpleGrid columns={2} gap="20px" mb="20px">
          <TotalSpent />
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </SimpleGrid>
        <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />
      </Box>
    );
  } else if (isAdmin === 'False') {
    return (
      <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
        {/* Main Fields */}
        <Grid
          templateColumns={{
            base: '1fr',
            lg: '1.34fr 1fr 1.62fr',
          }}
          templateRows={{
            base: 'repeat(3, 1fr)',
            lg: '1fr',
          }}
          gap={{base: '20px', xl: '20px'}}
        >
          <Banner
            gridArea="1 / 1 / 2 / 2"
            banner={banner}
            avatar={avatar}
            name="Adela "
            job="Product Designer"
            posts="17"
            followers="9.7k"
            following="274"
          />
          {/* <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        />
        <Upload
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe='20px'
          pb={{ base: "100px", lg: "20px" }}
        /> */}
        </Grid>
        <Grid
          mb="20px"
          templateColumns={{
            base: '1fr',
            lg: 'repeat(2, 1fr)',
            '2xl': '1.34fr 1.62fr 1fr',
          }}
          templateRows={{
            base: '1fr',
            lg: 'repeat(2, 1fr)',
            '2xl': '1fr',
          }}
          gap={{base: '20px', xl: '20px'}}
        >
          <Projects
            gridArea="1 / 2 / 2 / 2"
            banner={banner}
            avatar={avatar}
            name="Adela Parkson"
            job="Product Designer"
            posts="17"
            followers="9.7k"
            following="274"
          />
          <General gridArea={{base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3'}} minH="365px" pe="20px" />
          {/* <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "2 / 1 / 3 / 3",
            "2xl": "1 / 3 / 2 / 4",
          }}
        /> */}
        </Grid>
      </Box>
    );
  }
}
