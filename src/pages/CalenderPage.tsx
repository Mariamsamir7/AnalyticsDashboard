import React from 'react';
import { Box, Divider} from '@mui/material';
import PageHeader from '../components/PagesHeader';

const CalenderPage: React.FC = () => {
return(
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Calendar" />
      <Divider sx={{ marginBottom: 3 }} />
      {/* /// */}
      

    </Box>
)
}
export default CalenderPage;