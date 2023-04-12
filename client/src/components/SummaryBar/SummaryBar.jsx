import React from "react";

import { Grid, Typography } from "@mui/material";

import HouseIcon from "@mui/icons-material/House";
import BedIcon from "@mui/icons-material/Bed";
import HotTubIcon from "@mui/icons-material/HotTub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const SummaryBar = ({ property }) => {
  const { homeType, bedrooms, bathrooms, parking, squareFootage } = property;
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <HouseIcon />
          <Typography>{homeType}</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <BedIcon />
          <Typography>{bedrooms.toString()} Bedrooms</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <HotTubIcon />
          <Typography>{bathrooms.toString()} Bathrooms</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <DirectionsCarIcon />
          <Typography>{parking.garageSpaces} Garage</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <SquareFootIcon />
          <Typography>{squareFootage} Sqft</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SummaryBar;
