import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, InputBase, Box, Divider
        ,ListItem,List,ListItemAvatar, Typography, Avatar, ListItemText, Link,useTheme} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import languageimg from '../assets/images/us.png';
import UserAccount from '../assets/images/user.png';
import UserAccount1 from '../assets/images/user1.png';
import UserAccount2 from '../assets/images/user2.png';
import UserAccount3 from '../assets/images/user3.png';
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import AddHomeRoundedIcon from '@mui/icons-material/AddHomeRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
  drawerWidth: number;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[200], 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.25),
  },
  width: '100%',
  maxWidth: 300,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey[500],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Header: React.FC<HeaderProps> = ({ toggleDrawer, isDrawerOpen, drawerWidth, toggleDarkMode, isDarkMode }) => {

  const theme = useTheme(); 
  const [chatAnchorEl, setChatAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notifAnchorEl, setNotifAnchorEl] = React.useState<null | HTMLElement>(null);
  const [languageAnchorEl, setlanguageAnchorEl] = React.useState<null | HTMLElement>(null);
  const [accountAnchorEl, setAccountAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChatMenuOpen = (event: React.MouseEvent<HTMLElement>) => setChatAnchorEl(event.currentTarget);
  const handleNotifMenuOpen = (event: React.MouseEvent<HTMLElement>) => setNotifAnchorEl(event.currentTarget);
  const handlelanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => setlanguageAnchorEl(event.currentTarget);
  const handleAccountMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAccountAnchorEl(event.currentTarget);


  const handleChatMenuClose = () => setChatAnchorEl(null);
  const handleNotifMenuClose = () => setNotifAnchorEl(null);
  const handlelanguageMenuClose = () => setlanguageAnchorEl(null);
  const handleAccountMenuClose = () => setAccountAnchorEl(null);


  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.paper, 
        color: theme.palette.text.primary,
        width: `calc(100% - ${isDrawerOpen ? drawerWidth : 0}px)`,
        ml: `${isDrawerOpen ? drawerWidth : 0}px`,
        transition: (theme) =>
          theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Toolbar>
        {!isDrawerOpen && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        {/* Search Component */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search topics.." inputProps={{ 'aria-label': 'search' }} />
        </Search>

        {/* Icons on the Right */}
          {/* Dark Mode Toggle Button */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          {/* Icons */}
           <IconButton color="inherit" onClick={toggleDarkMode}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
          <IconButton color="inherit" onClick={handleChatMenuOpen}>
            <Badge badgeContent={3} color="primary">
              <ChatBubbleOutlineIcon />
            </Badge>
          </IconButton>
          <Menu
          anchorEl={chatAnchorEl}
          open={Boolean(chatAnchorEl)}
          onClose={handleChatMenuClose}
          MenuListProps={{ 'aria-labelledby': 'chat-button' }}
          >
  <Typography variant="subtitle1" sx={{ textAlign:"center"}}>
    3 New Messages
  </Typography>
  <Divider />
  <List>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Lucy Lavender" src={UserAccount1} />
      </ListItemAvatar>
      <ListItemText
        primary="Lucy Lavender"
        secondary="Nam pretium turpis et arcu. Duis arcu tortor."
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={UserAccount2} />
      </ListItemAvatar>
      <ListItemText
        primary="Remy Sharp"
        secondary="Curabitur ligula sapien euismod vitae."
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cassandra Mixon" src={UserAccount3} />
      </ListItemAvatar>
      <ListItemText
        primary="Cassandra Mixon"
        secondary="Pellentesque auctor neque nec urna."
      />
    </ListItem>
  </List>
  <Divider />
  <MenuItem sx={{ justifyContent: 'center' }}>
    <Link href="#" underline="hover" color="primary">
      Show all messages
    </Link>
  </MenuItem>
</Menu>

          {/* Notifications Icon with Menu */}
          <IconButton color="inherit" onClick={handleNotifMenuOpen}>
            <Badge badgeContent={7} color="primary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notifAnchorEl}
            open={Boolean(notifAnchorEl)}
            onClose={handleNotifMenuClose}
            MenuListProps={{ 'aria-labelledby': 'notif-button' }}
          >
           <Typography variant="subtitle1" sx={{ textAlign:"center"}}>
           7 New Notifications
  </Typography>
  <Divider />
  <List>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
      < DynamicFeedRoundedIcon color="primary"/>
      </ListItemAvatar>
      <ListItemText
        primary="Update Complete"
        secondary="Restart Server to complete update"
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
      < PersonAddAltRoundedIcon color="primary"/>
      </ListItemAvatar>
      <ListItemText
        primary="New Connection"
        secondary="Anna accepted your request"
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
      <AddHomeRoundedIcon color="primary"/>
      </ListItemAvatar>
      <ListItemText
        primary="New Login"
        secondary="Login from 192.168"
      />
    </ListItem>
  </List>
  <Divider />
  <MenuItem sx={{ justifyContent: 'center' }}>
    <Link href="#" underline="hover" color="primary">
      Show all notifications
    </Link>
  </MenuItem>
          </Menu>

          {/* Languageimg with Menu */}
          <IconButton color="inherit"  onClick={handlelanguageMenuOpen}>
            <img
              src={languageimg}
              alt="Languadge"
              style={{
                width: 25,
                height: 25,
                borderRadius: '50%',
                objectFit: 'cover',  
              }}
            />
          </IconButton>
          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handlelanguageMenuClose}
            MenuListProps={{ 'aria-labelledby': 'language-button' }}
          >
            <MenuItem onClick={handlelanguageMenuClose}>English</MenuItem>
            <MenuItem onClick={handlelanguageMenuClose}>French</MenuItem>
            <MenuItem onClick={handlelanguageMenuClose}>German</MenuItem>
            <MenuItem onClick={handlelanguageMenuClose}>Dutch</MenuItem>
          </Menu>

          {/* User Profile Image with Account Menu */}
          <IconButton color="inherit" onClick={handleAccountMenuOpen}>
            <img
              src={UserAccount}
              alt="User Account"
              style={{
                width: 45,
                height: 45,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </IconButton>
          <Menu
            anchorEl={accountAnchorEl}
            open={Boolean(accountAnchorEl)}
            onClose={handleAccountMenuClose}
            MenuListProps={{ 'aria-labelledby': 'account-button' }}
          >
            <MenuItem onClick={handleAccountMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleAccountMenuClose}>Settings & Privacy</MenuItem>
            <Divider />
            <MenuItem onClick={handleAccountMenuClose}>Help</MenuItem>
            <MenuItem onClick={handleAccountMenuClose}>Sign Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;