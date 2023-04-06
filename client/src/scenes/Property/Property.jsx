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
import SlideShow from "../../components/SlideShow";

const Property = ({ properties = [], clients = [] }) => {
  const isNonMediumScreen = useMediaQuery(useTheme().breakpoints.down("md"));
  const { id } = useParams();
  const currentProperty = properties.find((property) => property._id === id);
  const [propertyPhotos, setPhotos] = useState([]);

  useEffect(() => {
    if (!currentProperty) return;
    const { photos } = currentProperty;
    setPhotos(photos);
  }, [currentProperty]);

  return (
    <Grid container direction="column">
      <Grid item>
        <Box display="flex" justifyContent="center">
          <SlideShow photos={propertyPhotos || []} id={id} />
        </Box>
      </Grid>
      <Grid
        container
        item
        direction={isNonMediumScreen ? "column" : "row"}
        justifyContent="flex-start"
      >
        <Grid item xs={12} md={6} direction="column">
          <Infobox
            properties={properties || []}
            id={id}
            clients={clients || []}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Property;
