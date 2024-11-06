import {  Typography, Box, Button, IconButton, } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterListIcon from '@mui/icons-material/FilterList';

interface WelcomeProps {
    title: string;
  }
  
  const Welcome: React.FC<WelcomeProps> = ({ title }) => {

return (

<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
<Box>
  <Typography variant="h5" fontWeight="bold">
    {title} Dashboard
  </Typography>
  <Typography variant="subtitle1" color="textSecondary" my={2}>
    Welcome back, Lucy! We've missed you. 👋
  </Typography>
</Box>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <IconButton color="primary">
    <RefreshIcon />
  </IconButton>
  <IconButton color="primary">
    <FilterListIcon />
  </IconButton>
  <Button variant="contained" color="primary" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
    Today: April 29
  </Button>
</Box>
</Box>
 ) }
 export default Welcome;