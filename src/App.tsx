import React from 'react';
import DynamicBackground from './compoments/DynamicBackground';
import CardWeather from './compoments/CardWeather';

const App: React.FC = () => {

  return (
    <DynamicBackground>
      <CardWeather />
    </DynamicBackground>
  );
};

export default App;