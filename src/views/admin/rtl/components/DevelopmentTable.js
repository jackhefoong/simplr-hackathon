/* eslint-disable */
import {
  Flex,
  Progress,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Box,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import React, {useMemo} from 'react';
import {useGlobalFilter, usePagination, useSortBy, useTable} from 'react-table';
import {Button} from '@chakra-ui/react';
import {Icon} from '@chakra-ui/react';
import {MdCheckCircle, MdCancel, MdWarning} from 'react-icons/md';

export default function DevelopmentTable(props) {
  const {columnsData, tableData} = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, initialState} = tableInstance;
  initialState.pageSize = 11;
  const {isOpen, onOpen, onClose} = useDisclosure();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  return (
    <Card direction="column" w="100%" px="0px" overflowX={{sm: 'scroll', lg: 'hidden'}}>
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
          Employee Benefits
        </Text>
        <Menu />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Claim Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src="https://s2.studylib.net/store/data/013790713_1-1272db9c818ae7f8235af6262dde8287.png"
              alt="Form"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Deny
            </Button>
            <Button colorScheme="green" onClick={onClose}>Approve</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex justify="space-between" align="center" fontSize={{sm: '10px', lg: '12px'}} color="gray.400">
                    {column.render('Header')}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = '';
                  if (cell.column.Header === 'NAME') {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === 'TYPE OF CLAIM') {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === 'FILE') {
                    data = (
                      <Button color={textColor} fontSize="sm" fontWeight="700" bgColor={'lightgrey'} onClick={onOpen}>
                        {cell.value}
                      </Button>
                    );
                  } else if (cell.column.Header === 'STATUS') {
                    data = (
                      <Flex align="center">
                        <Icon
                          w="24px"
                          h="24px"
                          me="5px"
                          color={
                            cell.value === 'Approved'
                              ? 'green.500'
                              : cell.value === 'Denied'
                              ? 'red.500'
                              : cell.value === 'Pending'
                              ? 'yellow.500'
                              : null
                          }
                          as={cell.value === 'Approved' ? MdCheckCircle : cell.value === 'Denied' ? MdCancel :  cell.value === 'Pending' ? MdWarning : null}
                        />
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  }

                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{sm: '14px'}}
                      minW={{sm: '150px', md: '200px', lg: 'auto'}}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
