import React from 'react';
import { Box, Typography, Link,useTheme ,useMediaQuery} from '@mui/material';

interface FooterProps {
  isDrawerOpen: boolean;
  drawerWidth: number;
}

const Footer: React.FC<FooterProps> = ({ isDrawerOpen, drawerWidth }) => {
  const theme = useTheme(); 
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      component="footer"
      sx={{
         width: isDrawerOpen && !isSmallScreen ? `calc(100% - ${drawerWidth}px)` : '100%',
         ml: isDrawerOpen && !isSmallScreen ? `${drawerWidth}px `: 0,
        backgroundColor: theme.palette.background.paper, 
        color: theme.palette.text.primary,
        py: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        transition: (theme) =>
          theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
         
      }}
    >
      
      {/* Left side links */}
      <Box  sx={{ fontSize:15 }} >
        <Link href="#" underline="hover" color="textSecondary"  sx={{ mx: 1 }}>
          Support
        </Link>
        <Link href="#" underline="hover" color="textSecondary" sx={{ mx: 1 }}>
          Help Center
        </Link>
        <Link href="#" underline="hover" color="textSecondary" sx={{ mx: 1 }}>
          Privacy
        </Link>
        <Link href="#" underline="hover" color="textSecondary" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
      </Box>

      {/* Right side copyright */}
      <Box display="flex" alignItems="center">
        <Typography variant="body2" color="textSecondary" sx={{ mr: 2 }}>
          &copy; 2024 Mira
        </Typography>
       
      </Box>
    </Box>
  );
};

export default Footer;

