import { useState } from "react";
import { Box, Grid, Tab, Tabs, useTheme } from "@material-ui/core";
import { Divider, Typography } from "@mui/material";

const DetailsSection = ({ property = [], clients = [], id }) => {
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      item
      container
      sx={{
        width: "100%",
      }}
    >
      <Tabs
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
    <>
      <Typography>
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
        <Typography>Tax:</Typography>
        <Typography>${taxes} / 2022</Typography>
      </Grid>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
    </>
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
  return (
    <>
      <DetailsSection property={property} clients={clients} id={id} />
    </>
  );
};

export default KeyDetails;
