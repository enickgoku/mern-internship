import React from "react";

import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";

import HistoryIcon from "@mui/icons-material/History";
import KeyIcon from "@mui/icons-material/Key";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";

const blue = {
  500: "#007FFF",
};

const grey = {
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
};

const Root = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: block;
  width: 40px;
  height: 24px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 20px;
      top: 4px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);

const Shortcuts = () => {
  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h6">Shortcuts</Typography>
      </Grid>
      <Grid item container direction="row" alignItems="center">
        <Grid item>
          <Typography variant="h6">Notify Similar Properties</Typography>
        </Grid>
        <Grid item>
          <SwitchUnstyled component={Root} {...label} />
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <KeyIcon />
          <Typography variant="h6">Key Facts</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <HistoryIcon />
          <Typography variant="h6">Property History</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <DataUsageIcon />
          <Typography variant="h6">Demographics</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <GpsNotFixedIcon />
          <Typography variant="h6">Points of Interest</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Shortcuts;
