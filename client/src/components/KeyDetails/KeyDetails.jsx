import { useState } from "react";
import { Grid, Tab, Tabs } from "@material-ui/core";
import { Divider, Typography } from "@mui/material";

const DetailsSection = ({ property = [], clients = [], id }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "blue" } }}
      >
        <Tab label="Key Facts" value={0} />
        <Tab label="Details" value={1} />
        <Tab label="Rooms" value={2} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabKeyFacts property={property} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabKeyDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabRooms />
      </TabPanel>
    </Grid>
  );
};

const TabKeyFacts = ({ property }) => {
  const {
    taxes,
    homeType,
    buildingAge,
    squareFootage,
    parking,
    basement,
    mlsNumber,
  } = property;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        width: { xs: "100%", sm: "800px" },
      }}
    >
      <Typography variant="h6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non,
        dolorem dolore dolores quia quam totam odit! Veniam incidunt esse labore
        odio iste, laborum dolor ratione consectetur quia minus libero.
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontSize="1.25rem">
          Tax:
        </Typography>
        <Typography variant="h6" fontSize="1.25rem" fontStyle="bold">
          ${taxes} / 2022
        </Typography>
      </Grid>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontSize="1.25rem">
          Type:
        </Typography>
        <Typography variant="h6" fontSize="1.25rem" fontStyle="bold">
          {homeType}
        </Typography>
      </Grid>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontSize="1.25rem">
          Building Age:
        </Typography>
        <Typography variant="h6" fontSize="1.25rem" fontStyle="bold">
          {buildingAge} Years
        </Typography>
      </Grid>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontSize="1.25rem">
          Size:
        </Typography>
        <Typography variant="h6" fontSize="1.25rem" fontStyle="bold">
          {squareFootage}
        </Typography>
      </Grid>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontSize="1.25rem">
          Garage Type / Spaces:
        </Typography>
        <Typography variant="h6" fontSize="1.25rem" fontStyle="bold">
          {parking.garageType} / {parking.garageSpaces}
        </Typography>
      </Grid>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontSize="1.25rem">
          Basement / Sqft:
        </Typography>
        <Typography variant="h6" fontSize="1.25rem" fontStyle="bold">
          {basement.type} / {basement.squareFootage}
        </Typography>
      </Grid>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontSize="1.25rem">
          MLS Number:
        </Typography>
        <Typography variant="h6" fontSize="1.25rem" fontStyle="bold">
          # {mlsNumber}
        </Typography>
      </Grid>
    </Grid>
  );
};

const TabKeyDetails = () => {
  return <div>Key Details</div>;
};

const TabRooms = () => {
  return <div>Key Rooms</div>;
};

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div hidden={value !== index}>{children}</div>;
};

const KeyDetails = ({ id, property = [], clients = [] }) => {
  return <DetailsSection property={property} clients={clients} id={id} />;
};

export default KeyDetails;
