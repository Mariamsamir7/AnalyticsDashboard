import React from 'react';
import { Typography, Breadcrumbs, Link, Box} from '@mui/material';

interface PageHeaderProps {
  title: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Box mb={2}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb">
          <Link 
            color= "textprimary"
            href="/Dashboard"
            underline="hover"
          >
            Dashboard 
          </Link>
          <Link 
            color= "textprimary"
            href="/Pages"
            underline="hover"
          >
           Pages
          </Link>
        <Typography color='textPrimary'>
        {title}
        </Typography>
      </Breadcrumbs>
      
      
    </Box>
  );
};

export default PageHeader;