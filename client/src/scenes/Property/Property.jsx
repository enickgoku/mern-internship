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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width={{ xs: "100%", md: "800px" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SlideShow photos={propertyPhotos || []} id={id} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          direction={{ xs: "column", md: isNonMediumScreen ? "column" : "row" }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: isNonMediumScreen ? "1fr" : "1fr 1fr",
            },
            gridGap: "1rem",
            width: "100%",
            maxWidth: "70%",
          }}
        >
          <Box
            xs={12}
            md={6}
            direction="column"
            // maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Infobox
              properties={properties || []}
              id={id}
              clients={clients || []}
            />
          </Box>
          <Box
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              width: { xs: "100%", md: "100%" },
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.grey[900],
              border: "1px solid black",
              borderRadius: "0.5rem",
            }}
          >
            <KeyDetails
              property={currentProperty || []}
              id={id}
              clients={clients || []}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Property;
