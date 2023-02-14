

import React from "react";

// Chakra imports

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

import { Heading } from '@chakra-ui/react'

import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box m="100px">
      <Heading>Ratings Definition</Heading>

      <div  >
<p>      Exceptional (9-10): Consistently exceeds all relevant performance standards. Provides 
leadership, fosters teamwork, is highly productive, innovative, responsive and generates 
top quality work. </p>
<br />
<p>Exceeds expectations (7-8): Consistently meets and often exceeds all relevant 
performance standards. Shows initiative, works collaboratively, has strong technical and 
interpersonal skills or has achieved significant improvement in these areas. </p>
<br />
<p>Meets expectations (5-6): Meets all relevant performance standards. Seldom exceeds 
or falls short of desired results or objectives.</p>
<br />
<p>
Below expectations (3-4): Sometimes meets the performance standards but seldom 
exceeds them. Often falls short of desired results. Performance has declined significantly, 
or employee has not sustained adequate improvement, as required since the last 
performance review or performance.
</p>
<br />

<p>Below expectations (3-4): Sometimes meets the performance standards but seldom 
exceeds them. Often falls short of desired results. Performance has declined significantly, 
or employee has not sustained adequate improvement, as required since the last 
performance review or performance.</p>
</div>

<Heading mt="20px">Quality of Work</Heading>

<Box border="1px solid" borderColor="black">
      <Table>
        <Thead>
          <Tr>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              
            </Th>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              Rating
            </Th>
            <Th padding="10px">Not Applicable</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
            Has established a track record of producing work that is highly 
accurate, while demonstrating attention to detail. Is personally 
committed to high quality work and encourages others to have 
similar standards
            </Td>
            <Td borderRight="1px solid" borderColor="black" padding="10px">

            </Td>
            <Td padding="10px"> <Checkbox defaultChecked></Checkbox></Td>
          </Tr>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
              COMMENTS
            </Td>

          </Tr>
        </Tbody>
      </Table>
    </Box>

    <Heading mt="20px">Initiative</Heading>

<Box border="1px solid" borderColor="black">
      <Table>
        <Thead>
          <Tr>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              
            </Th>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              Rating
            </Th>
            <Th padding="10px">Not Applicable</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
            Recognizes opportunities and initiates actions to capitalize on 
them. Looks for new and productive ways to make an impact. 
Demonstrates this characteristic when it comes to generating new 
ideas or processes, capitalizing on new business opportunities, 
seeking out and taking on increasing responsibility or resolving 
problems as they occur.
            </Td>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
              
            </Td>
            <Td padding="10px"> <Checkbox defaultChecked></Checkbox></Td>
          </Tr>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
              COMMENTS
            </Td>

          </Tr>
        </Tbody>
      </Table>
    </Box>

    <Heading mt="20px">Productivity</Heading>

<Box border="1px solid" borderColor="black">
      <Table>
        <Thead>
          <Tr>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              
            </Th>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              Rating
            </Th>
            <Th padding="10px">Not Applicable</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
            Meets or exceeds productivity standards that have been 
established for his/her organizational level or position. Is 
continuously combining skills, ability and effort to ensure that 
expectations related to results/output are achieved
            </Td>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
              
            </Td>
            <Td padding="10px"> <Checkbox defaultChecked></Checkbox></Td>
          </Tr>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
              COMMENTS
            </Td>

          </Tr>
        </Tbody>
      </Table>
    </Box>

    <Heading mt="20px">Customer Focus</Heading>

<Box border="1px solid" borderColor="black">
      <Table>
        <Thead>
          <Tr>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              
            </Th>
            <Th borderRight="1px solid" borderColor="black" padding="10px">
              Rating
            </Th>
            <Th padding="10px">Not Applicable</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
            Personally demonstrates that external (or internal) customers are a
high priority. Identifies customer needs and expectations and 
responds to them in a timely and effective manner. Anticipates and
prevents delays or other factors that could adversely affect the 
customer. Keeps customers informed about the status of pending 
actions and inquires about customer satisfaction with products or 
services. 
            </Td>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
              
            </Td>
            <Td padding="10px"> <Checkbox defaultChecked></Checkbox></Td>
          </Tr>
          <Tr>
            <Td borderRight="1px solid" borderColor="black" padding="10px">
              COMMENTS
            </Td>

          </Tr>
        </Tbody>
      </Table>
    </Box>
    


    </Box>
  );
}
