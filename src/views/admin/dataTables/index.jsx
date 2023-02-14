import {Box} from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import LeaveForm from 'views/admin/dataTables/components/LeaveForm';
import {columnsDataDevelopment} from 'views/admin/dataTables/variables/columnsData';
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.json';
import userData from 'views/admin/dataTables/variables/userData.json';
import React from 'react';

export default function Settings() {
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
          <LeaveForm />
          <DevelopmentTable columnsData={columnsDataDevelopment} tableData={userData} />
        </Box>
      );
    }
  }
}
