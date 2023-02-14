import {Box} from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import {columnsDataDevelopment} from 'views/admin/dataTables/variables/columnsData';
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.json';
import React from 'react';

export default function Settings() {
  return (
    <Box>
      <DevelopmentTable columnsData={columnsDataDevelopment} tableData={tableDataDevelopment} />
    </Box>
  );
}
