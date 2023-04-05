import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import Infobox from "../../components/InfoBox";

const Property = ({ properties = [], clients = [] }) => {
  const isNonMediumScreen = useMediaQuery(useTheme().breakpoints.down("md"));
  const { id } = useParams();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* {Row 1} */}
      <Infobox properties={properties || []} id={id} clients={clients || []} />
    </Grid>
  );
};

export default Property;
