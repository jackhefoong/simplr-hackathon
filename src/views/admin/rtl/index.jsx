import {Box} from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/rtl/components/DevelopmentTable';
import {columnsDataDevelopment} from 'views/admin/rtl/variables/columnsData';
import tableDataDevelopment from 'views/admin/rtl/variables/tableDataDevelopment.json';
import React from 'react';

export default function UserReports() {
  return (
    <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
      <DevelopmentTable columnsData={columnsDataDevelopment} tableData={tableDataDevelopment} />
    </Box>
  );
}
