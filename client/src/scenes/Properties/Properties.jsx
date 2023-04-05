import React from "react";
import { Navigate } from "react-router-dom";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FlexContainer from "../../components/FlexContainer";
import SlideShow from "../../components/SlideShow";

const PropertyCard = ({ property }) => {
  const theme = useTheme();
  const { address, photos, homeType, squareFootage, _id } = property;

  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const addCommasToPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Card
      sx={{
        width: isNotMobile ? "50vw" : "100vw",
        margin: "2rem 2rem 0 2rem",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "0 0 10px 0 rgba(248,248,248,0.7)",
          backgroundColor: "rgba(10,200,248,0.7)",
          transition: "all 0.3s ease-in-out",
        },
        textOverflow: "ellipsis",
      }}
    >
      <CardHeader title={address.street} subheader={homeType} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SlideShow photos={photos} id={_id} />
      </Box>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            ${addCommasToPrice(property.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address.city}, {address.state}, {address.zip}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.bedrooms} BR | {property.bathrooms} BA | {squareFootage}{" "}
            sqft
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const PropertyList = ({ properties }) => {
  return (
    <Box sx={{}}>
      {properties.map((property) => (
        <FlexContainer
          sx={{ justifyContent: "center", marginBottom: "2rem" }}
          key={property._id}
        >
          <PropertyCard key={property._id} property={property} />
        </FlexContainer>
      ))}
    </Box>
  );
};

export default PropertyList;
