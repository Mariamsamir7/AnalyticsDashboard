// src/components/Sidebar.tsx
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  Box,
  Badge,
  Collapse,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PagesIcon from '@mui/icons-material/Pages';
import ProjectsIcon from '@mui/icons-material/Work';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import ProductsIcon from '@mui/icons-material/Inventory';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import AuthIcon from '@mui/icons-material/Lock';
import GridViewIcon from '@mui/icons-material/GridView'; 
import PieChartIcon from '@mui/icons-material/PieChart'; 
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'; 
import MapIcon from '@mui/icons-material/Map'; 


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface SidebarProps {
  isDrawerOpen: boolean;
  drawerWidth: number;
  toggleDrawer: () => void;
  isTemporary: boolean; 
}

const Sidebar: React.FC<SidebarProps> = ({ isDrawerOpen, drawerWidth, toggleDrawer, isTemporary }) => {
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const [openInvoices, setOpenInvoices] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openElements, setOpenElements] = useState(false); 
  const [openCharts, setOpenCharts] = useState(false); 
  const [openForms, setOpenForms] = useState(false); 
  const [openIcons, setOpenIcons] = useState(false); 
  const [openMaps, setOpenMaps] = useState(false); 

  
  const handleDashboardClick = () => setOpenDashboard(!openDashboard);
  const handlePagesClick = () => setOpenPages(!openPages);
  const handleInvoicesClick = () => setOpenInvoices(!openInvoices);
  const handleAuthClick = () => setOpenAuth(!openAuth);
  const handleElementsClick = () => setOpenElements(!openElements); 
  const handleChartsClick = () => setOpenCharts(!openCharts); 
  const handleFormsClick = () => setOpenForms(!openForms); 
  const handleIconsClick = () => setOpenIcons(!openIcons); 
  const handleMapsClick = () => setOpenMaps(!openMaps); 


  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1E2A38',
          color: '#fff',
        },
      }}
      variant={isTemporary ? 'temporary' : 'persistent'}   
      anchor="left"
      open={isDrawerOpen}
      onClose={isTemporary ? toggleDrawer : undefined} 
    >

  
      <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center' , mx: 4}} >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#4782DA" width={30} height={30} style={{marginRight:10}}>
         <path d="M30.83 9.388c-1.712-3.015-6.123-2.808-7.547.353l-3.077 6.837-4.762 10.578c-1.262 2.804.789 5.975 3.863 5.975h.078a4.24 4.24 0 0 0 3.87-2.511l7.76-17.415a4.24 4.24 0 0 0-.185-3.817M39.276 24.29l-.038-.066a5 5 0 0 0-.293-.453 4 4 0 0 0-.26-.325l-.028-.028a4 4 0 0 0-.267-.266q-.034-.032-.07-.063-.15-.132-.31-.248l-.044-.029a4 4 0 0 0-.302-.192l-.067-.038a4 4 0 0 0-.353-.173l-.047-.02a4 4 0 0 0-.346-.127l-.047-.015a4 4 0 0 0-.39-.1l-.038-.006a4 4 0 0 0-.396-.06h-.01q-.21-.02-.419-.02h-.022q-.424.002-.841.086-.004 0-.007.002a4.2 4.2 0 0 0-1.587.681 4.2 4.2 0 0 0-1.414 1.726l-1.17 2.6c-1.262 2.804.788 5.975 3.863 5.975h.079c1.12 0 2.17-.443 2.946-1.194l.032-.03q.06-.062.12-.126l.076-.082a5 5 0 0 0 .355-.464q.035-.053.07-.107.047-.078.092-.158.026-.044.05-.09.07-.128.128-.26l1.129-2.534a4.24 4.24 0 0 0-.174-3.796M15.95 13.205a4.24 4.24 0 0 0-.373-4.117l-.066-.09a5 5 0 0 0-.14-.188l-.081-.097a4 4 0 0 0-.39-.401l-.084-.075a4 4 0 0 0-.21-.166l-.045-.035a4 4 0 0 0-.267-.177q-.037-.022-.075-.043a4 4 0 0 0-.203-.112l-.101-.049a4 4 0 0 0-.492-.196l-.103-.034a5 5 0 0 0-.229-.06l-.073-.019a4 4 0 0 0-.308-.056l-.053-.007a4 4 0 0 0-.256-.026L12.3 7.25a4 4 0 0 0-.857.043l-.09.013a4.169 4.169 0 0 0-3.136 2.435L.379 27.155c-1.262 2.804.789 5.975 3.863 5.975h.079a4.24 4.24 0 0 0 3.87-2.511l5.655-12.691z"></path>
        </svg>
        <Typography variant="h6" noWrap sx={{ color: '#fff', display: 'flex', alignItems: 'center'}}>
          Mira

        </Typography>
        <Badge badgeContent="Pro" color="success" sx={{ ml: 3}}>
          </Badge>
          <DrawerHeader>

      </DrawerHeader>
      </Box>
    </Toolbar>

      <List
        subheader={
          <ListSubheader component="div" sx={{ backgroundColor: '#1E2A38', color: '#aaa' }}>
            PAGES
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleDashboardClick}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: '#aaa' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {openDashboard ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="AnalyticsDashboard/">
              <ListItemText primary="Default" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="Dashboard/analytics">
              <ListItemText primary="Analytics" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="Dashboard/saas">
              <ListItemText primary="SaaS" />
            </ListItemButton>
          </List>
        </Collapse>
        
        <ListItem disablePadding>
            <ListItemButton onClick={handlePagesClick}>
              <ListItemIcon>
                <PagesIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Pages" />
              {openPages ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openPages} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="Pages/Profile">
                <ListItemText primary="Profile" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="Pages/Settings">
                <ListItemText primary="Settings" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="Pages/Pricing">
                <ListItemText primary="Pricing" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="Pages/Chat">
                <ListItemText primary="Chat" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="Pages/Blank">
                <ListItemText primary="Blank Page" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/projects">
              <ListItemIcon>
                <ProjectsIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Projects" />
              <Badge badgeContent={8} color="primary" sx={{ mr: 1}} />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/orders">
              <ListItemIcon>
                <OrdersIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/products">
              <ListItemIcon>
                <ProductsIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={handleInvoicesClick}>
              <ListItemIcon>
                <AuthIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Invoices" />
              {openInvoices ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openInvoices} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/Invoices/List">
                <ListItemText primary="List" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/Invoices/Detail">
                <ListItemText primary="Detail" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/tasks">
              <ListItemIcon>
                <TaskOutlinedIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
              <Badge badgeContent={17} color="primary" sx={{ mr: 1 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/calendar">
              <ListItemIcon>
                <CalendarIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={handleAuthClick}>
              <ListItemIcon>
                <AuthIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Auth" />
              {openAuth ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openAuth} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/signin">
                <ListItemText primary="Sign In" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/signincover">
                <ListItemText primary="Sign In Cover" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/signup">
                <ListItemText primary="Sign Up" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/signupcover">
                <ListItemText primary="Sign Up Cover" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/resetpassword">
                <ListItemText primary="Reset Password" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/resetpasswordcover">
                <ListItemText primary="Reset Password Cover" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/404page">
                <ListItemText primary="404 Page" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/500page">
                <ListItemText primary="500 Page" />
              </ListItemButton>
            </List>
          </Collapse>

      </List>
      <List
        subheader={
          <ListSubheader component="div" sx={{ backgroundColor: '#1E2A38', color: '#aaa' }}>
           Elements
          </ListSubheader>
        }
      >
       <ListItem disablePadding>
            <ListItemButton onClick={handleElementsClick}>
              <ListItemIcon>
                <GridViewIcon sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Components" />
              {openElements ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openElements} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/elements/Alerts">
                <ListItemText primary="Alerts" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/elements/Avatars">
                <ListItemText primary="Avatars" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/elements/Buttons">
                <ListItemText primary="Buttons" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/elements/Badges">
                <ListItemText primary="Badges" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/elements/Lists">
                <ListItemText primary="Lists" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/elements/Menu">
                <ListItemText primary="Menu" />
              </ListItemButton>
              </List>
          </Collapse>
           <ListItem disablePadding>
            <ListItemButton onClick={handleChartsClick}>
              <ListItemIcon>
                <PieChartIcon  sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Chatrs" />
              {openCharts ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openCharts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/Charts/Charts.js">
                <ListItemText primary="Charts.js" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/charts/apexcharts">
                <ListItemText primary="Apexcharts" />
              </ListItemButton>
              
              </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton onClick={handleFormsClick}>
              <ListItemIcon>
                <CheckBoxIcon  sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Forms" />
              {openForms ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openForms } timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/forms/pickers">
                <ListItemText primary="Pickers" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/forms/selection-controls">
                <ListItemText primary="Selection Controls" />
              </ListItemButton>
               <ListItemButton sx={{ pl: 4 }} component={Link} to="/forms/selects">
                <ListItemText primary="Selects" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/forms/text-fields">
                <ListItemText primary="Text Fields" />
              </ListItemButton>
              </List>
          </Collapse>
           <ListItem disablePadding>
            <ListItemButton onClick={handleIconsClick}>
              <ListItemIcon>
                <FavoriteIcon  sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Icons" />
              {openIcons ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openIcons} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/icons/material-icons">
                <ListItemText primary="Material Icons" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/icons/lucide-icons">
                <ListItemText primary="Lucide Icons" />
              </ListItemButton>
           </List>
          </Collapse>
        <ListItem disablePadding>
            <ListItemButton onClick={handleMapsClick}>
              <ListItemIcon>
                <MapIcon  sx={{ color: '#aaa' }} />
              </ListItemIcon>
              <ListItemText primary="Maps" />
              {openMaps ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openMaps} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/maps/google-maps">
                <ListItemText primary="Google Maps" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="maps/vector-maps">
                <ListItemText primary="Vector Maps" />
              </ListItemButton>
            </List>
          </Collapse>
          </List>
    </Drawer>

  );
};

export default Sidebar;