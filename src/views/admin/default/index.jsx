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
}
