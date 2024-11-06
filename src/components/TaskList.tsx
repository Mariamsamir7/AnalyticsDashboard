import React from 'react';
import { Grid, Box } from '@mui/material';
import TaskCard, { TaskCardProps } from './TaskCard';

const tasks: TaskCardProps[] = [  
  {
    title: 'Landing page redesign',
    status: 'Finished',
    description: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum...',
    avatars: [
      'https://i.pravatar.cc/40?img=1',
      'https://i.pravatar.cc/40?img=2',
      'https://i.pravatar.cc/40?img=3',
    ],
  },
  {
    title: 'Company posters',
    status: 'In progress',
    description: 'Curabitur ligula sapien, tincidunt non, euismod vitae...',
    avatars: [
      'https://i.pravatar.cc/40?img=4',
      'https://i.pravatar.cc/40?img=5',
      'https://i.pravatar.cc/40?img=6',
    ],

  },
  {
    title: 'Product page design',
    status: 'Finished',
    description: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum...',
    avatars: [
      'https://i.pravatar.cc/40?img=7',
      'https://i.pravatar.cc/40?img=8',
      'https://i.pravatar.cc/40?img=9',
    ],
  },
  {
    title: 'Upgrade CRM software',
    status: 'In progress',
    description: 'Nam pretium turpis et arcu. Duis arcu tortor, tellus eget condimentum...',
    avatars: [
      'https://i.pravatar.cc/40?img=10',
      'https://i.pravatar.cc/40?img=11',
      'https://i.pravatar.cc/40?img=12',
    ],
  },
];

const TaskList: React.FC = () => {
  return (
    <Box sx={{ py: 1 }}>
      <Grid container spacing={4}>
        {tasks.map((task, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <TaskCard
              title={task.title}
              status={task.status}
              description={task.description}
              avatars={task.avatars}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskList;
