// dont need to import react since no jsx 
import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {  // children is returned when inner copmponent is used
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    
    // this removes it later on (cleanup function)
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []); // again, empty array means only run once

  return currentPath === path ? children : null;
};

export default Route;