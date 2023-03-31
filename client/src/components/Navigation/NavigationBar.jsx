import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';
import WarehouseIcon from '@mui/icons-material/Warehouse';

export default function NavigationBar() {
  const theme = useTheme(); // useTheme is a hook that returns the current theme object in the context of the component
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const drawerWidth = isMobileView ? '30vw' : '18vw';

  const menuOptions = [
    {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/',
    },
    {
      name: 'Search Property',
      icon: <TroubleshootIcon />,
      path: '/',
    },
    {
      name: 'Calender',
      icon: <CalendarMonthIcon />,
      path: '/',
    },
    {
      name: 'My Clients',
      icon: <PeopleAltIcon />,
      path: '/',
    },
    {
      name: 'MLS Listings',
      icon: <ShoppingCartIcon />,
      path: '/',
    },
    {
      name: 'Notifications',
      icon: <NotificationsIcon />,
      path: '/',
    },
    {
      name: 'Invite and Share',
      icon: <ShareIcon />,
      path: '/',
    }
  ]

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isMobileView && (
        <MenuIcon sx={{ fontSize: '2.5rem' }} onClick={handleDrawerToggle}></MenuIcon>
      )}
      <Drawer
        variant={isMobileView ? "temporary" : "persistent"}
        anchor="left"
        open={!isMobileView || isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          height: '1080px',
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <WarehouseIcon sx={{ fontSize: '2.5rem' }} />
          <Button sx={{ mt: '2rem', backgroundColor: '#2E63F6', color: 'white', '&:hover': { color: 'black' } }}>Create New Tour +</Button>
        </Box>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuOptions.map(({ name, icon, path }, index) => (
              <ListItem
                key={name}
                button
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
                disablePadding
                sx={{ m: '0.5rem' }}
              >
                <ListItemIcon onClick={() => navigate(path)}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={name} onClick={() => navigate(path)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
