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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { ChevronLeft, HelpOutline } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShareIcon from "@mui/icons-material/Share";
import WarehouseIcon from "@mui/icons-material/Warehouse";

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import FlexContainer from "../FlexContainer";

const menuOptions = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    name: "Search Property",
    icon: <TroubleshootIcon />,
    path: "searchproperty",
  },
  {
    name: "Calender",
    icon: <CalendarMonthIcon />,
    path: "calender",
  },
  {
    name: "My Clients",
    icon: <PeopleAltIcon />,
    path: "clients",
  },
  {
    name: "MLS Listings",
    icon: <ShoppingCartIcon />,
    path: "mlslistings",
  },
  {
    name: "Notifications",
    icon: <NotificationsIcon />,
    path: "notifications",
  },
  {
    name: "Invite and Share",
    icon: <ShareIcon />,
    path: "share",
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  isNotMobile,
  setIsSidebarOpen,
  user,
}) => {
  const { pathname } = useLocation();
  const [activeUrl, setActiveUrl] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActiveUrl(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSize: "border-box",
              borderWidth: isNotMobile ? "0" : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexContainer color={theme.palette.secondary.main}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap="0.5rem"
                  sx={{
                    mr: "0.6rem",
                    ml: "0.6rem",
                    textAlign: "center",
                  }}
                >
                  <WarehouseIcon
                    fontSize="large"
                    sx={{
                      color: theme.palette.primary[50],
                    }}
                  />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color={theme.palette.primary[50]}
                  >
                    Mern Internship
                  </Typography>
                </Box>
                {!isNotMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft fontSize="large" />
                  </IconButton>
                )}
              </FlexContainer>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button sx={{ backgroundColor: theme.palette.secondary[700] }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={theme.palette.primary[50]}
                >
                  Create New Tour +
                </Typography>
              </Button>
            </Box>
            <List>
              {menuOptions.map(({ name, icon, path }) => {
                return (
                  <ListItem key={name}>
                    <ListItemButton
                      onClick={() => {
                        navigate(`${path}`);
                        setActiveUrl(path);
                      }}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText sx={{ color: theme.palette.primary[50] }}>
                        <Typography variant="h6">{name}</Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
              ;
            </List>
          </Box>
          <Box position="absolute" bottom="2rem">
            <FlexContainer gap="1rem" flexDirection="column">
              <Box>
                <Box textAlign="left">
                  <Typography
                    fontSize="0.9rem"
                    sx={{
                      mt: "1rem",
                      ml: "1rem",
                      color: theme.palette.primary[50],
                    }}
                  >
                    Need Help?
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: "1rem" }}>
                  <IconButton sx={{ borderRadius: "0", m: "0" }}>
                    <HelpOutline sx={{ marginRight: "0.5rem" }} />
                    <Typography
                      fontSize="0.9rem"
                      sx={{ color: theme.palette.primary[50] }}
                    >
                      Help Desk
                    </Typography>
                  </IconButton>
                </Box>
              </Box>
            </FlexContainer>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
