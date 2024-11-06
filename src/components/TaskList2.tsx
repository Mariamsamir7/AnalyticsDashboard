// TaskList2.tsx
import React from 'react';
import { Grid, Box } from '@mui/material';
import TaskCard, { TaskCardProps } from './TaskCard';

const tasksWithImages: TaskCardProps[] = [
  {
    title: 'Landing page redesign',
    status: 'Finished',
    description: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum...',
    avatars: [
      'https://i.pravatar.cc/40?img=1',
      'https://i.pravatar.cc/40?img=2',
      'https://i.pravatar.cc/40?img=3',
    ],
    imageUrl: 'https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=1000&format=pjpg&exif=0&iptc=0', // Sample image URL
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfVkT11VtvvvaMXnjrpQQnyM2ZpMjbfSH4Q&s', // Sample image URL
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUrO6hMzw6_BVrgHkIRqpqImbM8SUAiHVCA&s', // Sample image URL
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
    imageUrl: 'https://www.itcilo.org/sites/default/files/styles/course_teaser_image_m/public/courses/cover-images/A9718079.jpeg?h=c8f6074c&itok=aO-_3BW-', // Sample image URL
  },
];

const TaskList2: React.FC = () => {
  return (
    <Box sx={{ py: 2}}>
      <Grid container spacing={4}>
        {tasksWithImages.map((task, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <TaskCard
              title={task.title}
              status={task.status}
              description={task.description}
              avatars={task.avatars}
              imageUrl={task.imageUrl} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskList2;
