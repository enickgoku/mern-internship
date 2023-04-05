import React, { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SlideShow from "../SlideShow";
import FlexContainer from "../FlexContainer";

const Infobox = ({ properties = [], clients = [], id: propertyId }) => {
  const theme = useTheme();

  const property = properties.find((property) => property._id === propertyId);
  const client = clients.find((client) => client._id === property?.client);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!property) return;
    if (!client) return;
  }, [client, property]);

  return (
    <Grid item xs={12} md={6}>
      <SlideShow photos={property?.photos} />
    </Grid>
  );
};

export default Infobox;
