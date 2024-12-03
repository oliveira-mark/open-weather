import React from 'react';

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherCurrentProps {
  data: WeatherData;
}

const CardWeatherCurrent: React.FC<WeatherCurrentProps> = ({ data }) => {
  return (
    <header className="text-center py-8 text-white">
      <h1 className="text-2xl font-extralight leading-normal">
        {data.name}
        <span className="block text-8xl relative -right-1 tracking-[-0.05rem] font-thin">
          {Math.round(data.main.temp)}
          <sup className="top-[-0.7em] text-5xl">°</sup>
        </span>
      </h1>
      <h2 className="opacity-80 font-extralight mt-4">{data.weather[0].description}</h2>
      <p className="opacity-80 text-sm mt-1">
        {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
      </p>
    </header>
  );
};

export default CardWeatherCurrent;
