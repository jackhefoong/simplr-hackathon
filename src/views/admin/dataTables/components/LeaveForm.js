import {Box, Center, Button, FormControl, FormLabel, Heading, Input, Select, Flex} from '@chakra-ui/react';

import Card from 'components/card/Card';

export default function LeaveForm() {
  return (
    <Flex justifyContent="center" mt="15%">
      <Card direction="column" w="70%" padding="20px">
        <Heading>Leave Application Form</Heading>
        <Center padding="20px">
          <FormControl maxW="30%" my="20px">
            <FormLabel>Leave Type</FormLabel>
            <Select placeholder="Leave Type">
              <option value="option1">Annual Leave</option>
              <option value="option2">Medical Leave</option>
              <option value="option3">Personal Leave</option>
            </Select>
          </FormControl>
          <FormControl maxW="30%" my="20px">
            <FormLabel>From</FormLabel>
            <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
          </FormControl>
          <FormControl maxW="30%" my="20px">
            <FormLabel>To</FormLabel>
            <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
          </FormControl>
        </Center>
        <Button bg="lightgrey">Submit</Button>
      </Card>
    </Flex>
  );
}
