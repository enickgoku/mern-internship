import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
// ICONS
import MapIcon from "@mui/icons-material/Map";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShareIcon from "@mui/icons-material/Share";
import NotesIcon from "@mui/icons-material/Notes";
import MailIcon from "@mui/icons-material/Mail";

const List = ({ property = [], client = [], id }) => {
  const theme = useTheme();

  const addCommasToPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (!property || !client) return <p>Loading...</p>;

  const address = property?.address ?? [];
  const { street = "", city = "", state = "", zip = "" } = address;
  const {
    name = "",
    email = "",
    phone = "",
    state: clientState = "",
  } = client ?? {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        width: "100%",
        borderRadius: "0.5rem",
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            color: theme.palette.primary[50],
            backgroundColor: theme.palette.secondary[600],
            borderRadius: "0.5rem",
            margin: "0.5rem",
            "&:hover": {
              backgroundColor: theme.palette.secondary[700],
            },
          }}
        >
          For Sale
        </Button>
        <Button
          sx={{
            color: theme.palette.primary[50],
            backgroundColor: theme.palette.secondary[600],
            borderRadius: "0.5rem",
            margin: "0.5rem",
            width: "150px",
            "&:hover": {
              backgroundColor: theme.palette.secondary[700],
            },
          }}
        >
          Add List
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            fontSize="1.25rem"
            variant="bold"
            sx={{ color: theme.palette.primary[55] }}
          >
            MLS#:{" "}
          </Typography>
          <Typography
            fontSize="1.25rem"
            sx={{ color: theme.palette.primary[55] }}
          >
            {property?.mlsNumber}
          </Typography>
        </Box>
        <Typography
          sx={{
            marginTop: "0.2rem",
          }}
        >
          Listed for:{" "}
          {property?.price ? `$${addCommasToPrice(property.price)}` : "N/A"}
        </Typography>
        <Typography
          fontSize="1.5rem"
          sx={{
            marginTop: "0.2rem",
          }}
        >
          {street}, {city}, {state}, {zip}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "90%",
            height: "35px",
            border: `2px solid ${theme.palette.primary[400]}`,
            borderRadius: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexGrow: 1,
            }}
          >
            <MapIcon />
            <Typography
              sx={{
                marginLeft: "0.5rem",
              }}
            >
              View on Map
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "90%",
            height: "35px",
            border: `2px solid ${theme.palette.primary[400]}`,
            borderRadius: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexGrow: 1,
            }}
          >
            <DirectionsIcon />
            <Typography
              sx={{
                marginLeft: "0.5rem",
              }}
            >
              Directions
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "90%",
            height: "35px",
            border: `2px solid ${theme.palette.primary[400]}`,
            borderRadius: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexGrow: 1,
            }}
          >
            <ShareIcon />
            <Typography
              sx={{
                marginLeft: "0.5rem",
              }}
            >
              Share
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "90%",
            border: `2px solid ${theme.palette.primary[400]}`,
            borderRadius: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexGrow: 1,
            }}
          >
            <NotesIcon />
            <Typography
              sx={{
                marginLeft: "0.5rem",
              }}
            >
              Notes
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "90%",
            height: "70px",
            backgroundColor: theme.palette.grey[300],
            borderRadius: "0.5rem",
            marginTop: "8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "0.5rem",
            }}
          >
            <Typography>Listing Agent</Typography>
            <Typography>{name}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography>{phone}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "2rem",
                }}
              >
                <Button
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <MailIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Infobox = ({ property = [], client = [], id: propertyId }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      sx={{
        color: theme.palette.primary[400],
        margin: "1rem",
        width: "286px",
        height: "564px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <List property={property} client={client} id={propertyId} />
    </Grid>
  );
};

export default Infobox;
