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
  FormControl,
  Input,
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

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const user = JSON.parse(window.localStorage.getItem('user'));
  const isAdmin = user.isAdmin;
  return (
    <Box>
      {/* Application Form TODO */}
      <Box>
        <FormControl>
          <Input />
        </FormControl>
      </Box>

      <Card direction="column" w="100%" px="0px" overflowX={{sm: 'scroll', lg: 'hidden'}}>
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
            Leave Applications
          </Text>
          {/* <Menu /> */}
        </Flex>
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
                    } else if (cell.column.Header === 'TYPE OF LEAVE') {
                      data = (
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'DURATION') {
                      data = (
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'STATUS') {
                      {
                        isAdmin === 'True'
                          ? cell.value === 'Pending'
                            ? (data = (
                                <HStack spacing="10px">
                                  <Box>
                                    <Button colorScheme={'green'}>Approve</Button>
                                  </Box>
                                  <Box>
                                    <Button colorScheme={'red'}>Deny</Button>
                                  </Box>
                                </HStack>
                              ))
                            : (data = (
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
                                    as={
                                      cell.value === 'Approved'
                                        ? MdCheckCircle
                                        : cell.value === 'Denied'
                                        ? MdCancel
                                        : cell.value === 'Pending'
                                        ? MdWarning
                                        : null
                                    }
                                  />
                                  <Text color={textColor} fontSize="sm" fontWeight="700">
                                    {cell.value}
                                  </Text>
                                </Flex>
                              ))
                          : (data = (
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
                                  as={
                                    cell.value === 'Approved'
                                      ? MdCheckCircle
                                      : cell.value === 'Denied'
                                      ? MdCancel
                                      : cell.value === 'Pending'
                                      ? MdWarning
                                      : null
                                  }
                                />
                                <Text color={textColor} fontSize="sm" fontWeight="700">
                                  {cell.value}
                                </Text>
                              </Flex>
                            ));
                      }
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
    </Box>
  );
}
