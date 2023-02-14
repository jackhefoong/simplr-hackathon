import {Box} from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/rtl/components/DevelopmentTable';
import {columnsDataDevelopment} from 'views/admin/rtl/variables/columnsData';
import tableDataDevelopment from 'views/admin/rtl/variables/tableDataDevelopment.json';
import React from 'react';
import ClaimForm from './components/ClaimForm';

export default function UserReports() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const isAdmin = user.isAdmin;
  // eslint-disable-next-line no-lone-blocks
  {
    if (isAdmin === 'True') {
      return (
        <Box>
          <DevelopmentTable columnsData={columnsDataDevelopment} tableData={tableDataDevelopment} />
        </Box>
      );
    } else {
      return (
        <Box>
          <ClaimForm />
        </Box>
      );
    }
  }
}
