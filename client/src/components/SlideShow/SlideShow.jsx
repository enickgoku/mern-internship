import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';

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

export default function Slideshow({ properties }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const images = [];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setDirection('left');
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setDirection('right');
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt=""
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        custom={direction}
        transition={{ duration: 0.5 }}
      />
      <IconButton
        sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}
        onClick={handlePrevClick}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
        onClick={handleNextClick}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}