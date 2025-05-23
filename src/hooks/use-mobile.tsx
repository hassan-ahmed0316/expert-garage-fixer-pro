
import { useState, useEffect } from 'react';

export function useMobile() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define breakpoints based on Tailwind's default breakpoints
  const isMobile = windowSize.width < 640;  // sm
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024; // md-lg
  const isDesktop = windowSize.width >= 1024;

  return { 
    isMobile, 
    isTablet, 
    isDesktop,
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
  };
}
