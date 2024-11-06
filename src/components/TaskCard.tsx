import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Avatar, Stack, Box ,Divider} from '@mui/material';


export interface TaskCardProps {
    title: string;
    status: 'Finished' | 'In progress'; 
    description: string;
    avatars: string[];
    imageUrl?: string; 

  }

  const TaskCard: React.FC<TaskCardProps> = ({ title, status, description, avatars, imageUrl }) => {
    return (
    <Card sx={{ borderRadius: 2 }}>
    {imageUrl && (
      <Box component="img" src={imageUrl} alt={title} sx={{ width: '100%',height:"200px", borderRadius: '8px 8px 0 0' }} />
    )}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Chip
          label={status}
          color={status === 'Finished' ? 'success' : 'warning'}
          sx={{ mb: 1 }}
        />

        <Typography variant="body2" color="textSecondary" paragraph>
          {description}
        </Typography>

        <Stack direction="row" spacing={-1} sx={{ mb: 2 }}>
          {avatars.map((avatar, index) => (
            <Avatar key={index} src={avatar} />
          ))}
        </Stack>
       <Divider />
        <Box display="flex" mt={1}>
          <Button variant="text" size="small" color="primary">
            Share
          </Button>
          <Button variant="text" size="small" color="primary">
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
