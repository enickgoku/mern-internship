import React from 'react';
import { Box, Card, CardHeader, CardContent, Typography, useTheme } from '@mui/material';
import FlexContainer from '../../components/FlexContainer';
import SlideShow from '../../components/SlideShow';

const PropertyCard = ({ property }) => {
  const theme = useTheme();
  const { address, photos, homeType, _id } = property;

  return (
    <Card>
      <CardHeader title={address.street} subheader={homeType} />
      <SlideShow photos={photos} id={_id} />
      <CardContent>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Typography variant="body2" color="text.secondary">
            {address.city}, {address.state}, {address.zip}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.bedrooms} BR | {property.bathrooms} BA | {property.sqft} sqft
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const PropertyList = ({ properties }) => {
  console.log(properties)
  return (
    <div>
      {properties.map((property) => (
        <FlexContainer sx={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <PropertyCard key={property._id} property={property} />
        </FlexContainer>
      ))}
    </div>
  );
};

export default PropertyList;