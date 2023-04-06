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
          fontSize="1.75rem"
          variant="bold"
          sx={{ color: theme.palette.primary[50] }}
        >
          MLS#:
        </Typography>
        <Typography
          fontSize="1.75rem"
          sx={{ color: theme.palette.primary[50] }}
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
        border: `2px solid ${theme.palette.primary[400]}`,
        width: "286px",
        height: "564px",
      }}
    >
      <List properties={properties} clients={clients} id={propertyId} />
    </Grid>
  );
};

export default Infobox;
