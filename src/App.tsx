import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Toolbar, useMediaQuery, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import GlobalStyles from './styles/GlobalStyles';
import AppRouter from './AppRouter';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const drawerWidth = 280;

const App: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:959px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(!isSmallScreen);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(!isSmallScreen);
  }, [isSmallScreen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#121212' : '#F7F9FC', 
        paper: isDarkMode ? '#1e1e1e' : '#ffffff',  
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#000000', 
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <GlobalStyles />
        <Box sx={{ display: 'flex' }}>
          <Header
            toggleDrawer={toggleDrawer}
            isDrawerOpen={isDrawerOpen}
            drawerWidth={drawerWidth}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <Sidebar isDrawerOpen={isDrawerOpen} drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} isTemporary={isSmallScreen} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              transition: (theme: Theme) =>
                theme.transitions.create(['margin', 'width'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }}
          >
            <Toolbar />
            <AppRouter />
          </Box>
        </Box>
        <Footer isDrawerOpen={isDrawerOpen} drawerWidth={drawerWidth} />
      </Router>
    </ThemeProvider>
  );
};

export default App;