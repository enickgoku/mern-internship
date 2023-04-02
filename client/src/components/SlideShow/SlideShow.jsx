import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';

const variants = {
  enter: (direction) => {
    return {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0,
    };
  },
};

export default function Slideshow({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();

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
  }, [photos]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    setDirection('left');
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
    setDirection('right');
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {loaded && (
        <motion.img
          key={currentIndex}
          src={photos[currentIndex]}
          alt=""
          initial="enter"
          animate="center"
          exit="exit"
          width={500}
          height={300}
          variants={variants}
          custom={direction}
          transition={{ duration: 0.2 }}
        />
      )}
      <IconButton
        sx={{ backgroundColor: theme.palette.secondary[800], position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}
        onClick={handlePrevClick}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        sx={{ backgroundColor: theme.palette.secondary[800], position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
        onClick={handleNextClick}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}
