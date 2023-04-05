import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import FlexContainer from "../../components/FlexContainer";
import SlideShow from "../../components/SlideShow";

const PropertyCard = ({ property }) => {
  const theme = useTheme();
  const { address, photos, homeType, squareFootage, _id } = property;

  const addCommasToPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Card>
      <CardHeader title={address.street} subheader={homeType} />
      <SlideShow photos={photos} id={_id} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            $ {addCommasToPrice(property.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address.city}, {address.state}, {address.zip}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.bedrooms} BR | {property.bathrooms} BA |{" "}
            {property.squareFootage} sqft
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const PropertyList = ({ properties }) => {
  return (
    <Box>
      {properties.map((property) => (
        <FlexContainer sx={{ justifyContent: "center", marginBottom: "2rem" }}>
          <PropertyCard key={property._id} property={property} />
        </FlexContainer>
      ))}
    </Box>
  );
};

export default PropertyList;
