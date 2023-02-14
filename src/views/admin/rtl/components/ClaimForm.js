import {Box, Center, Button, FormControl, FormLabel, Heading, Input, Select, Flex} from '@chakra-ui/react';

import Card from 'components/card/Card';

export default function ClaimForm() {
  return (
    <Flex justifyContent="center" mt="15%">
      <Card direction="column" w="70%" padding="20px">
        <Heading>Claim Application Form</Heading>
        <Center padding="20px">
          <FormControl maxW="30%" my="20px">
            <FormLabel>Claim Type</FormLabel>
            <Select placeholder="Claim Type">
              <option value="option1">Dental Claim</option>
              <option value="option2">Medical Claim</option>
              <option value="option3">Insurance Claim</option>
            </Select>
          </FormControl>
          <Box margin="0px 50px"/>
          <FormControl maxW="30%" my="20px">
            <FormLabel>Upload Receipt</FormLabel>
            <Input placeholder="Upload Receipt" size="md" type="file" />
          </FormControl>
        </Center>
        <Button bg="lightgrey">Submit</Button>
      </Card>
    </Flex>
  );
}
