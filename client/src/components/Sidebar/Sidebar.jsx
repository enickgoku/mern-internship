import { 
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { ChevronLeft } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';
import WarehouseIcon from '@mui/icons-material/Warehouse';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import FlexContainer from '../FlexContainer';

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

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  isNotMobile,
  setIsSidebarOpen,
  }) => {
  const { pathname } = useLocation();
  const [activeUrl, setActiveUrl] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActiveUrl(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component='nav'>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSize: 'border-box',
              borderWidth: isNotMobile ? '0' : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width='100%'>
            <Box m='1.5rem 2rem 2rem 3rem'>
              <FlexContainer color={theme.palette.secondary.main}>
                <Box display='flex' alignItems='center' gap='0.5rem'>
                  <WarehouseIcon fontSize='large' />
                  <Typography variant='h4' fontWeight='bold'>
                    Mern Internship
                  </Typography>
                </Box>
                {isNotMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft fontSize='large' sx={{ ml: '0.8rem' }} />
                  </IconButton>
                )}
              </FlexContainer>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Button>
                <Typography variant='h6' fontWeight='bold' color={theme.palette.primary}>
                  Create New Tour +
                </Typography>
              </Button>
            </Box>
          </Box>
        </Drawer>  
      )}
    </Box>
  );
};

export default Sidebar;
