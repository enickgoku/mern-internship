import React, { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FlexContainer from "../FlexContainer";

const List = ({ properties = [], clients = [], id }) => {
  const theme = useTheme();
  const property = properties.find((property) => property._id === id);
  const client = clients.find((client) => client._id === property?.client);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!property) return;
    if (!client) return;
  }, [client, property]);

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            color: theme.palette.primary[50],
            backgroundColor: theme.palette.secondary[600],
            borderRadius: "0.5rem",
            margin: "0.5rem",
          }}
        >
          For Sale
        </Button>
        <Button
          sx={{
            color: theme.palette.primary[50],
            backgroundColor: theme.palette.secondary[600],
            borderRadius: "0.5rem",
            margin: "0.5rem",
            width: "150px",
          }}
        >
          Add List
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginLeft: "0.5rem",
        }}
      >
        <Typography
          fontSize="1.25rem"
          variant="bold"
          sx={{ color: theme.palette.primary[55] }}
        >
          MLS#:{" "}
        </Typography>
        <Typography
          fontSize="1.25rem"
          sx={{ color: theme.palette.primary[55] }}
        >
          {property?.mlsNumber}
        </Typography>
      </Box>
    </Box>
  );
};

const Infobox = ({ properties = [], clients = [], id: propertyId }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      sx={{
        color: theme.palette.primary[400],
        margin: "1rem",
        width: "286px",
        height: "564px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <List properties={properties} clients={clients} id={propertyId} />
    </Grid>
  );
};

export default Infobox;
