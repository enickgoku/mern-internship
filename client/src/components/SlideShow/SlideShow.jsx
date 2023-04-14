import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";

const variants = {
  enter: (direction) => {
    return {
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction === "left" ? "100%" : "-100%",
      opacity: 0,
    };
  },
};
const Slideshow = ({ photos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    const imagePromises = photos.map((photo) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = photo;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoaded(true);
    });
    if (!photos) return;
  }, [photos, loaded]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    setDirection("left");
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
    setDirection("right");
  };

  return (
    <Box sx={{ position: "relative", marginTop: "0.5rem" }}>
      {loaded && (
        <motion.img
          key={currentIndex}
          src={photos[currentIndex]}
          alt=""
          initial="enter"
          animate="center"
          exit="exit"
          width={isExtraSmall ? "100%" : "auto"}
          height={isExtraSmall ? "auto" : "300px"}
          variants={variants}
          custom={direction}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: "10px",
          }}
        />
      )}
      <ArrowButtons
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        isExtraSmall={isExtraSmall}
        loaded={loaded}
      />
    </Box>
  );
};

const ArrowButtons = ({
  handleNextClick,
  handlePrevClick,
  isExtraSmall,
  loaded,
}) => {
  const theme = useTheme();
  return (
    <>
      {loaded && (
        <IconButton
          sx={{
            backgroundColor: theme.palette.secondary[800],
            position: "absolute",
            top: "50%",
            left: isExtraSmall ? "10px" : "120px",
            transform: "translateY(-50%)",
            "&:hover": {
              backgroundColor: theme.palette.secondary[600],
            },
          }}
          onClick={handlePrevClick}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      {loaded && (
        <IconButton
          sx={{
            backgroundColor: theme.palette.secondary[800],
            position: "absolute",
            top: "50%",
            right: isExtraSmall ? "10px" : "120px",
            transform: "translateY(-50%)",
            "&:hover": {
              backgroundColor: theme.palette.secondary[600],
            },
          }}
          onClick={handleNextClick}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </>
  );
};

export default Slideshow;
