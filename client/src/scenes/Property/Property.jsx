import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Infobox from "../../components/InfoBox";
import KeyDetails from "../../components/KeyDetails";
import SlideShow from "../../components/SlideShow";

const Property = ({ properties = [], clients = [] }) => {
  const isNonMediumScreen = useMediaQuery(useTheme().breakpoints.down("md"));
  const { id } = useParams(); // id is the property id
  const currentProperty = properties.find((property) => property._id === id);
  const currentClient = clients.find((client) =>
    currentProperty?.client.includes(client._id)
  );
  const [propertyPhotos, setPhotos] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    if (!currentProperty) return <p>Loading...</p>;
    const { photos } = currentProperty;
    setPhotos(photos);
  }, [currentProperty]);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={6}>
        <Grid item sx={{ width: { xs: "100%", sm: "800px" } }}>
          <SlideShow photos={propertyPhotos || []} id={id} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} container spacing={3}>
        <Grid item xs={12} md={4}>
          <Grid
            container
            direction="column"
            sx={{
              alignItems: isNonMediumScreen ? "flex-start" : "center",
              width: "100%",
            }}
          >
            <Infobox
              properties={properties || []}
              id={id}
              clients={clients || []}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" component="h1">
              bar above key details
            </Typography>
          </Grid>
          <Grid
            item
            direction="column"
            sx={{
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.grey[900],
              border: "1px solid black",
              borderRadius: "0.5rem",
              width: "100%",
            }}
          >
            <KeyDetails
              property={currentProperty || []}
              id={id}
              clients={clients || []}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item container sx={{ width: "100%" }}>
            <Grid item>
              <Typography variant="h4" component="h1">
                Styling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Property;
