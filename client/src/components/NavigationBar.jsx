import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from '@material-ui/icons/Mail';
import HelpIcon from '@material-ui/icons/Help';
import { motion } from "framer-motion";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: isMobileView ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        mt: isMobileView ? "auto" : 0, // add margin-top only in mobile view
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {isMobileView ? (
          <IconButton color="inherit" onClick={handleToggle}>
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Button color="inherit">
              <HomeIcon />
              <Typography variant="button">Dashboard</Typography>
            </Button>
            <Button color="inherit">
              <InfoIcon />
              <Typography variant="button">Search Property</Typography>
            </Button>
            <Button color="inherit">
              <MailIcon />
              <Typography variant="button">Calendar</Typography>
            </Button>
            <Button color="inherit">
              <InfoIcon />
              <Typography variant="button">My Clients</Typography>
            </Button>
            <Button color="inherit">
              <MailIcon />
              <Typography variant="button">MLS Lists</Typography>
            </Button>
            <Button color="inherit">
              <InfoIcon />
              <Typography variant="button">Notifications</Typography>
            </Button>
            <Button color="inherit">
              <MailIcon />
              <Typography variant="button">Invite and Earn</Typography>
            </Button>
          </>
        )}
      </Box>
      {isMobileView && (
      <Drawer anchor="left" open={isOpen} onClose={handleToggle}>
        <List>
          <ListItem button onClick={handleToggle}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleToggle}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Search Property" />
          </ListItem>
          <ListItem button onClick={handleToggle}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button onClick={handleToggle}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="My Clients" />
          </ListItem>
          <ListItem button onClick={handleToggle}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="MLS Lists" />
          </ListItem>
          <ListItem button onClick={handleToggle}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
        <>
          <Box sx={{ flexGrow: 1 }} /> {/* add a spacer */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="button" sx={{ mr: 2 }}>
              Need Help?
            </Typography>
            <Button color="inherit">
              <HelpIcon />
              <Typography variant="button">Help Desk</Typography>
            </Button>
          </Box>
        </>
      </Drawer>
      )}
    </Box>
  );
};

export default NavigationBar;