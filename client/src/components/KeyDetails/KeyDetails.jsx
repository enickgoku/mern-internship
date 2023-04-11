import { Box, Grid, useTheme } from "@mui/material";
import React from "react";

const DetailsSection = ({ properties = [], clients = [], id }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.grey[50],
        borderRadius: "0.5rem",
      }}
    >
      <h1>Hi</h1>
    </Box>
  );
};

const KeyDetails = ({ id, properties = [], clients = [] }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      sx={{
        color: theme.palette.primary[400],
        margin: "1rem",
        width: "100%",
        height: "564px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <DetailsSection properties={properties} clients={clients} id={id} />
    </Grid>
  );
};

export default KeyDetails;
