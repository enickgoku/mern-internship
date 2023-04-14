import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Underdevelopment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography fontSize="3rem">
        This page is under development. Please check back later.
      </Typography>
      <Button variant="contained" href="/">
        Go Home
      </Button>
    </Box>
  );
};

export default Underdevelopment;
