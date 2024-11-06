import React from 'react';
import { Box, Divider} from '@mui/material';
import PageHeader from '../components/PagesHeader';
import TaskList from '../components/TaskList';
import TaskList2 from '../components/TaskList2';

const ProjectsPage: React.FC = () => {
return(
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      {/* Header */}
      <PageHeader title="Projects" />
      <Divider sx={{ marginBottom: 3 }} />
      {/* /// */}
      <TaskList />
      <TaskList2 />

    </Box>
)
}
export default ProjectsPage;