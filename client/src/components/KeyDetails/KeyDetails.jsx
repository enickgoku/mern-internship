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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
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
      <TabPanel value={value} index={1}>
        <Box>
          <TabKeyDetails />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box>
          <TabRooms />
        </Box>
      </TabPanel>
    </Box>
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non,
        dolorem dolore dolores quia quam totam odit! Veniam incidunt esse labore
        odio iste, laborum dolor ratione consectetur quia minus libero.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography>Tax:</Typography>
        <Typography>${taxes} / 2022</Typography>
      </Box>
      <Divider sx={{ height: 2, backgroundColor: "grey" }} />
    </Box>
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
  return <Box hidden={value !== index}>{children}</Box>;
};

const KeyDetails = ({ id, property = [], clients = [] }) => {
  return (
    <Box
      sx={{
        margin: "1rem",
        width: "400px",
        height: "564px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <DetailsSection property={property} clients={clients} id={id} />
    </Box>
  );
};

export default KeyDetails;
