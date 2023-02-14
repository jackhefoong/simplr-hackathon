import React from 'react';
import {Box} from '@chakra-ui/react';
import ReviewForm from './components/ReviewForm';
import PerformanceGraph from './components/PerformanceGraph';

export default function Marketplace() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const isAdmin = user.isAdmin;
  // eslint-disable-next-line no-lone-blocks
  {
    if (isAdmin === 'True') {
      return (
        <Box>
          <ReviewForm />
        </Box>
      );
    } else {
      return (
        <Box>
          <PerformanceGraph />
        </Box>
      );
    }
  }
}
