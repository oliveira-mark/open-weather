import React, { useState, useEffect} from 'react';

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

interface DynamicBackgroundProps {
  children: React.ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const getBackgroundImage = () => {
    const userHour = new Date().getHours();
    if (userHour >= 20 || userHour < 4) {
      return `${PUBLIC_URL}assets/img/dynamic-background/20h.jpg`;
    }
    return `${PUBLIC_URL}assets/img/dynamic-background/${userHour}h.jpg`;
  }

  useEffect (() => {
    setBackgroundImage(getBackgroundImage());
    
    const interval = setInterval(() => {
      setBackgroundImage(getBackgroundImage());
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div
        className="fixed filter blur-0 inset-0 w-full h-full scale-110 -z-10"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
      ></div>
      {children}
    </main>

  )
}

export default DynamicBackground;