import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const win = window || {};
  const {
    innerHeight,
    innerWidth,
    outerHeight,
    outerWidth,
  } = win;

  const [windowDimensions, setWindowDimensions] = useState({
    innerHeight,
    innerWidth,
    outerHeight,
    outerWidth,
  });

  const handleResize = () => {
    const {
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    } = win;
    setWindowDimensions({
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    });
  };

  useEffect(() => {
    win.addEventListener('resize', handleResize);
    return () => {
      win.removeEventListener('resize', handleResize);
    };
  });

  return windowDimensions;
};

export default useWindowDimensions;
