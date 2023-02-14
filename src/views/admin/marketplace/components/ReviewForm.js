import React from 'react';

import {
  Input,
  Heading,
  Box,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Textarea,
  Select,
  HStack,
  Button,
  Flex,
} from '@chakra-ui/react';

export default function ReviewForm() {
  return (
    <Box>
      <HStack spacing="10px">
        <Select placeholder="Reviewee" bg="white" w="200px">
          <option value="option1">Tareef</option>
          <option value="option2">Zhong How</option>
          <option value="option3">Rex Yap</option>
        </Select>
        {/* Reviewer */}
        <Select placeholder="Jac Khe  " bg="white" w="200px" disabled>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>

      <Heading my="10px">Ratings Definition</Heading>
      <div>
        <p>
          {' '}
          Exceptional (9-10): Consistently exceeds all relevant performance standards. Provides leadership, fosters
          teamwork, is highly productive, innovative, responsive and generates top quality work.{' '}
        </p>
        <br />
        <p>
          Exceeds expectations (7-8): Consistently meets and often exceeds all relevant performance standards. Shows
          initiative, works collaboratively, has strong technical and interpersonal skills or has achieved significant
          improvement in these areas.{' '}
        </p>
        <br />
        <p>
          Meets expectations (5-6): Meets all relevant performance standards. Seldom exceeds or falls short of desired
          results or objectives.
        </p>
        <br />
        <p>
          Below expectations (3-4): Sometimes meets the performance standards but seldom exceeds them. Often falls short
          of desired results. Performance has declined significantly, or employee has not sustained adequate
          improvement, as required since the last performance review or performance.
        </p>
        <br />

        <p>Needs improvement (1-2): Consistently falls short of performance standards.</p>
      </div>

      <Heading mt="20px" mb="10px">
        Quality of Work
      </Heading>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th border={'1px solid black'}></Th>
              <Th border={'1px solid black'}>Rating</Th>
              <Th border={'1px solid black'}>Not Applicable</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>
                Has established a track record of producing work that is highly accurate, while demonstrating attention
                to detail. Is personally committed to high quality work and encourages others to have similar standards
              </Td>
              <Td border={'1px solid black'}>
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Checkbox />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Input placeholder="Comments" size="md" variant="unstyled" padding="10px" />
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Heading mt="20px" mb="10px">
        Initiative
      </Heading>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th border={'1px solid black'}></Th>
              <Th border={'1px solid black'}>Rating</Th>
              <Th border={'1px solid black'}>Not Applicable</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>
                Recognizes opportunities and initiates actions to capitalize on them. Looks for new and productive ways
                to make an impact. Demonstrates this characteristic when it comes to generating new ideas or processes,
                capitalizing on new business opportunities, seeking out and taking on increasing responsibility or
                resolving problems as they occur.
              </Td>
              <Td border={'1px solid black'}>
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Checkbox />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Input placeholder="Comments" size="md" variant="unstyled" padding="10px" />
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Heading mt="20px" mb="10px">
        Productivity
      </Heading>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th border={'1px solid black'}></Th>
              <Th border={'1px solid black'}>Rating</Th>
              <Th border={'1px solid black'}>Not Applicable</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>
                Meets or exceeds productivity standards that have been established for his/her organizational level or
                position. Is continuously combining skills, ability and effort to ensure that expectations related to
                results/output are achieved
              </Td>
              <Td border={'1px solid black'}>
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Checkbox />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Input placeholder="Comments" size="md" variant="unstyled" padding="10px" />
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Heading mt="20px" mb="10px">
        Customer Focus
      </Heading>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th border={'1px solid black'}></Th>
              <Th border={'1px solid black'}>Rating</Th>
              <Th border={'1px solid black'}>Not Applicable</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>
                Personally demonstrates that external (or internal) customers are a high priority. Identifies customer
                needs and expectations and responds to them in a timely and effective manner. Anticipates and prevents
                delays or other factors that could adversely affect the customer. Keeps customers informed about the
                status of pending actions and inquires about customer satisfaction with products or services.
              </Td>
              <Td border={'1px solid black'}>
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Checkbox />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Input placeholder="Comments" size="md" variant="unstyled" padding="10px" />
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Heading mt="20px" mb="10px">
        Ratings
      </Heading>
      <p>
        <i>
          5 – Exceptional; 4 – Exceeds Expectations; 3 – Meets Expectations; 2 – Below Expectations; 1 – Needs
          Improvement
        </i>
      </p>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th border={'1px solid black'}></Th>
              <Th border={'1px solid black'}>Quality</Th>
              <Th border={'1px solid black'}>Rating</Th>
              <Th border={'1px solid black'}>Comments</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>1</Td>
              <Td border={'1px solid black'}>Works to Full Potential</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>2</Td>
              <Td border={'1px solid black'}>Work Consistency</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>3</Td>
              <Td border={'1px solid black'}>Communication</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>4</Td>
              <Td border={'1px solid black'}>Independent Work</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>5</Td>
              <Td border={'1px solid black'}>Group Work</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>6</Td>
              <Td border={'1px solid black'}>Creativity</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>7</Td>
              <Td border={'1px solid black'}>Honesty</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>8</Td>
              <Td border={'1px solid black'}>Coworker Relations</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>9</Td>
              <Td border={'1px solid black'}>Technical Skills</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>10</Td>
              <Td border={'1px solid black'}>Dependability</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>11</Td>
              <Td border={'1px solid black'}>Productivity</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>12</Td>
              <Td border={'1px solid black'}>Attendance</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>13</Td>
              <Td border={'1px solid black'}>Punctuality</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>14</Td>
              <Td border={'1px solid black'}>Play above the line</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
            <Tr border={'1px solid black'}>
              <Td border={'1px solid black'}>15</Td>
              <Td border={'1px solid black'}>Take Initiative</Td>
              <Td border={'1px solid black'} textAlign="center">
                <Stack shouldWrapChildren direction="row">
                  <NumberInput size="sm" maxW={16} defaultValue={1} min={1} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Stack>
              </Td>
              <Td border={'1px solid black'} textAlign="center">
                <Input size="sm" variant="unstyled" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Heading mt="20px" mb="10px">
        Strengths / Training Needs
      </Heading>
      <Box>
        <Textarea placeholder="Detail of Employee's Greatest Strengths" bg={'white'} />
      </Box>

      <Flex justifyContent="end">
        <Box my="10px">
          <Button bg="#422afb" color="white">
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
