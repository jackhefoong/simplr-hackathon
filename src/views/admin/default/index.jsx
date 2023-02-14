import {
  FormLabel,
  Box,
  Select,
  SimpleGrid,
  Input,
  Button,
  useDisclosure,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Tbody,
  Tr,
  Th,
  TableContainer,
  useConst,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import CheckTable from 'views/admin/default/components/CheckTable';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import {columnsDataCheck, columnsDataComplex} from 'views/admin/default/variables/columnsData';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json';

const user = JSON.parse(window.localStorage.getItem('user'));
const isAdmin = user.isAdmin;

export default function UserReports() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [input, setInput] = useConst('');
  const handleInputChange = (e) => setInput(e.target.value);

  const user = JSON.parse(window.localStorage.getItem('user'));
  const isOnboarding = user.isOnboarding;

  function submitClose(){
    onClose();
    user.isOnboarding = "False"
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  useEffect(() => {
    if (isOnboarding === 'True') {
      onOpen();
    }
  }, [isOnboarding, onOpen]);

  return (
    <>
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Personal Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody maxW="1000px" marginLeft={'auto'} marginRight="auto">
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Th>
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input type="email" value={input} onChange={handleInputChange} />
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
                          <FormLabel>Bank Name</FormLabel>
                          <Input />
                        </FormControl>
                      </Th>
                    </Tr>
                    <Tr>
                      <Th>
                        <FormControl>
                          <FormLabel>Bank Account Number</FormLabel>
                          <NumberInput>
                            <NumberInputField />
                          </NumberInput>
                        </FormControl>
                      </Th>
                      <Th>
                        <FormControl>
                          <FormLabel>Contact Name (Emergency Contact)</FormLabel>
                          <Input />
                        </FormControl>
                      </Th>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={submitClose}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <Box>
        <SimpleGrid columns={2} gap="20px" mb="20px">
          <TotalSpent />
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </SimpleGrid>
        <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />
      </Box>
    </>
  );
}
