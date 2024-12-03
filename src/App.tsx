import React from 'react';
import DynamicBackground from './compoments/DynamicBackground';
import CardWeather from './compoments/card/CardWeather';

const App: React.FC = () => {

  return (
    <DynamicBackground>
      <CardWeather />
    </DynamicBackground>
  );
};

export default App;