import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Infobox from "../../components/InfoBox";
import KeyDetails from "../../components/KeyDetails";
import SlideShow from "../../components/SlideShow";
import SummaryBar from "../../components/SummaryBar";
import Shortcuts from "../../components/Shortcuts";

const Property = ({ properties = [], clients = [] }) => {
  const { id } = useParams(); // id is the property id

  const currentProperty = properties.find((property) => property._id === id);

  const currentClient = clients.find((client) =>
    currentProperty?.client.includes(client._id)
  );
  const [propertyPhotos, setPhotos] = useState([]);

  useEffect(() => {
    if (!currentProperty) return;
    if (!propertyPhotos) return;
    const { photos } = currentProperty;
    setPhotos(photos);
  }, [currentProperty, id, propertyPhotos]);

  const isNonMediumScreen = useMediaQuery(useTheme().breakpoints.down("md"));
  const theme = useTheme();

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
              alignItems: isNonMediumScreen ? "center" : "center",
              width: "100%",
            }}
          >
            <Infobox
              property={currentProperty || []}
              id={id}
              client={currentClient || []}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid
            item
            xs={12}
            sm={12}
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.primary[50],
              color: theme.palette.primary[900],
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0 0 0.5rem 0.1rem #000000",
              margin: "0.5rem",
            }}
          >
            <SummaryBar property={currentProperty || []} id={id} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            sx={{
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.grey[900],
              border: "1px solid black",
              borderRadius: "0.5rem",
              width: "100%",
              padding: "1rem",
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
          <Grid
            container
            sx={{
              width: "100%",
              backgroundColor: theme.palette.primary[50],
              color: theme.palette.primary[900],
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0 0 0.5rem 0.1rem #000000",
              marginTop: "0.5rem",
            }}
          >
            <Shortcuts />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Property;
