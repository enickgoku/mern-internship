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
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" width="800px">
          <SlideShow photos={propertyPhotos || []} id={id} />
        </Box>
      </Grid>
      <Grid
        container
        direction={isNonMediumScreen ? "column" : "row"}
        justifyContent="flex-start"
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            width: { xs: "100%", md: "50%" },
          }}
        >
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
