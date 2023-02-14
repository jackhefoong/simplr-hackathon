import {Box} from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import {columnsDataDevelopment} from 'views/admin/dataTables/variables/columnsData';
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.json';
import React from 'react';

export default function Settings() {
  return (
    <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
      <DevelopmentTable columnsData={columnsDataDevelopment} tableData={tableDataDevelopment} />
    </Box>
  );
}
