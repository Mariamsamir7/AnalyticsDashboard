import React from 'react';
import { Box, Divider} from '@mui/material';
import PageHeader from '../components/PagesHeader';

const TasksPage: React.FC = () => {
return(
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Tasks" />
      <Divider sx={{ marginBottom: 3 }} />
      {/* /// */}
      

    </Box>
)
}
export default TasksPage;