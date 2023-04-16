import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = ({ user }) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // This will render the Navbar and Sidebar components
  // and the Outlet component will render the component
  // that is currently being viewed.
  return (
    <Box
      display={isNotMobile ? "flex" : "block"}
      width="100%"
      height="100%"
      overflowx="hidden"
    >
      <Sidebar
        isNotMobile={isNotMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        user={user}
      />
      <Box flexGrow={isNotMobile ? 1 : 0}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          user={user}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
